// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const timezone = process.env.TZ;

export const bot1Operation = {
  wakeupTime: parseInt(process.env.BOT_1_WAKE_UP_TIME_MILLIS || '25200000'),
  workingDuration: parseInt(process.env.BOT_1_WORK_TIME_MILLIS || '57600000'),
};

export const logging = {
  file: process.env.FILE_LOG_ENABLED === true,
};
