import filelog from '../utils/filelog.js';
import sleep from '../utils/sleep.js';
import { threadId } from 'node:worker_threads';

let count = 1;
async function run() {
  console.log('Bot1: Doing Task...', `Process: ${process.pid}`, `Thread: ${threadId}`);
  await sleep(2000);

  if (count < 5) run();
  count++
}

filelog('Bot1: Started');
run();
