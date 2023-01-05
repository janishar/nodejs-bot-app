import { threadId } from 'node:worker_threads';

import { isdev } from '../config.js';

export default function debug(message) {
  if (isdev) console.log(message, `Process: ${process.pid}`, `Thread: ${threadId}`);
}
