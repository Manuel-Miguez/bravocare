import {
  areIntervalsOverlapping,
  max,
  min,
  differenceInMinutes,
  Interval,
  format,
} from 'date-fns';

export const dateRangeOverlaps = (
  dateRange1: Interval,
  dateRange2: Interval,
) => {
  const result = areIntervalsOverlapping(dateRange1, dateRange2);
  if (result) {
    const start = max([dateRange1.start, dateRange2.start]);
    const end = min([dateRange1.end, dateRange2.end]);
    return differenceInMinutes(end, start);
  }
  return 0;
};

const isDate = (date: any): date is Date => {
  return typeof date.getMonth === 'function';
};
export const formatDate = (date: Date | string) => {
  if (!date) return date;
  if (!isDate(date)) date = new Date(date);
  return date.toISOString().split('T')[0];
};

export const formatHour = (date: Date | string, hour: Date | string) => {
  const sampleDate = new Date(`${formatDate(date)} ${hour}`).getTime();
  return format(sampleDate, 'hh:mm a');
};
