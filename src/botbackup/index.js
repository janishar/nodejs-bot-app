import filelog from '../utils/filelog.js';
import sleep from '../utils/sleep.js';
import debug from '../utils/debug.js';

let count = 1;
async function run() {
 debug('Bot Backup: Doing Task...')
  await sleep(2000);

  if (count < 5) run();
  count++
}

filelog('BOT_BACKUP_RUN');
run();
