import { isMainThread, threadId, Worker } from 'node:worker_threads';
import sleep from './utils/sleep.js';

process.on('uncaughtException', (e) => {
  console.log(e);
});

async function run(){
  console.log('Main: Doing Task...', `Process: ${process.pid}`, `Thread: ${threadId}`);
  await sleep(4000)
  console.log("Hello Main")
  run()
}

if (isMainThread) {
  const bot1 = new Worker('./src/bots/bot1.js', {});
  bot1.on('message', (data) => console.debug('notify worker message', data));
  bot1.on('error', (error) => console.error(error));
  bot1.on('exit', (code) => console.debug('notify worker exit', code));
}

run()