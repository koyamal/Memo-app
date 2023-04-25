import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy/M/d HH:mm');
}
