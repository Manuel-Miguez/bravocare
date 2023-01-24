const isDate = (date: any): date is Date => {
  return typeof date.getMonth === 'function';
};
export const formatDate = (date: Date | string) => {
  if (!date) return date;
  if (!isDate(date)) date = new Date(date);
  return date.toISOString().split('T')[0];
};
