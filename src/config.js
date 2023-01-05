// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const timezone = process.env.TZ;

export const botNotifyOperation = {
  wakeupTime: parseInt(process.env.BOT_NOTIFY_WAKE_UP_TIME_MILLIS || '0'),
  workingDuration: parseInt(process.env.BOT_NOTIFY_WORK_TIME_MILLIS || '0'),
  waitDuration: parseInt(process.env.BOT_NOTIFY_TASK_WAIT_MILLIS || '0'),
};

export const botDbBackupOperation = {
  wakeupTime: parseInt(process.env.BOT_DB_BACKUP_WAKE_UP_TIME_MILLIS || '0'),
  workingDuration: parseInt(process.env.BOT_DB_BACKUP_WORK_TIME_MILLIS || '0'),
  waitDuration: parseInt(process.env.BOT_DB_BACKUP_TASK_WAIT_MILLIS || '0'),
};

export const logging = {
  file: process.env.FILE_LOG_ENABLED === 'true',
};

export const isdev = environment === 'development';
