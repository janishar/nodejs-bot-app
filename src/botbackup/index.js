import filelog from '../utils/filelog.js';
import sleep from '../utils/sleep.js';
import debug from '../utils/debug.js';
import timetable from '../utils/timetable.js';
import { botDbBackupOperation as ops } from '../config.js';

async function run() {
  const sleepTime = timetable(ops.wakeupTime, ops.workingDuration);
  if (sleepTime > 0) {
    filelog('BOT_DB_BACKUP_SLEEP');
    await sleep(sleepTime);
    filelog('BOT_DB_BACKUP_AWAKE');
  }

  // DO ANY TASK
  debug('BOT_DB_BACKUP: Doing Task...');
  filelog('BOT_DB_BACKUP_TASK_DONE');

  // wait for next task
  await sleep(ops.waitDuration);

  // start next task
  run();
}

filelog('BOT_DB_BACKUP_START');
run();
