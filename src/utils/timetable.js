import moment from 'moment';

export default async function timetable(wakeTimeMillis, workDurationMillis) {
  const maxDurationMillis = 24 * 60 * 60 * 1000;
  workDurationMillis = Math.min(workDurationMillis, maxDurationMillis);

  const now = moment();
  const wake = moment().startOf('day').add(wakeTimeMillis, 'ms');
  const end = moment(wake).add(workDurationMillis);
  const previousEnd = moment()
    .startOf('day')
    .subtract(1, 'day')
    .add(wakeTimeMillis, 'ms')
    .add(workDurationMillis, 'ms');

  const nextWake = moment(wake).add(24, 'h');

  if (now.isBefore(wake) && now.isAfter(previousEnd)) return wake.diff(now);
  if (now.isAfter(end)) return nextWake.diff(now);

  return 0;
}
