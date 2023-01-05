import fs from 'fs';
import moment from 'moment';
import path from 'path';
import { logging } from '../config.js';

const __root = path.resolve();
const logdir = path.join(__root, 'logs');
if (!fs.existsSync(logdir)) fs.mkdirSync(logdir);

export default async function filelog(...message) {
  try {
    if (!logging.file) return;
    if (message.length === 0) return;
    message.unshift(moment().format());
    message.push('\n');

    const filename = `${moment().format('YYYY-MM-DD')}.log`;
    const file = path.join(logdir, filename);
    fs.appendFileSync(file, message.join(' -- '));
  } catch (e) {
    console.log(e);
  }
}
