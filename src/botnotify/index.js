import filelog from '../utils/filelog.js';
import sleep from '../utils/sleep.js';
import debug from '../utils/debug.js';
import timetable from '../utils/timetable.js';
import { botNotifyOperation as ops } from '../config.js';

async function run() {
  const sleepTime = timetable(ops.wakeupTime, ops.workingDuration);
  if (sleepTime > 0) {
    filelog('BOT_NOTIFY_SLEEP');
    await sleep(sleepTime);
    filelog('BOT_NOTIFY_AWAKE');
  }

  // DO ANY TASK
  debug('BOT_NOTIFY: Doing Task...');
  filelog('BOT_NOTIFY_TASK_DONE');

  // wait for next task
  await sleep(ops.waitDuration);

  // start next task
  run();
}

filelog('BOT_NOTIFY_RUN');
run();
