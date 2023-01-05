import { isMainThread, Worker } from 'node:worker_threads';
import filelog from './utils/filelog.js';
import sleep from './utils/sleep.js';
import debug from './utils/debug.js';

process.on('uncaughtException', (e) => {
  console.log(e);
  filelog(e.stack);
});

async function run() {
  debug('Main: Doing Task...');
}

function launchBot(name) {
  if (isMainThread) {
    const bot = new Worker(`./src/${name}`, {});
    bot.on(
      'message',
      (data) => filelog(name, 'message', data) && console.debug(`${name} worker message`, data),
    );
    bot.on('error', (error) => filelog(name, 'error', error) && console.error(error));
    bot.on(
      'exit',
      (code) => filelog(name, 'exit', code) && console.debug(`${name} worker exit`, code),
    );
  }
}

filelog('BOT_APP_START');

launchBot('botnotify');
launchBot('botbackup');

run();
