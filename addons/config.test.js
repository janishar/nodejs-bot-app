// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const timezone = process.env.TZ;

import moment from 'moment';
const now = moment();
const start = moment(now).startOf('day');

export const botNotifyOperation = {
  wakeupTime: moment(now).add(5, 's').diff(start),
  workingDuration: 10000,
  waitDuration: 2000,
};

export const botDbBackupOperation = {
  wakeupTime: moment(now).add(20, 's').diff(start),
  workingDuration: 2000,
  waitDuration: 3000,
};

export const logging = {
  file: process.env.FILE_LOG_ENABLED === 'true',
};

export const isdev = environment === 'development';
