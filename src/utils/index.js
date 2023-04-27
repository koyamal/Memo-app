import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy/M/d HH:mm');
}

export function translateErrors(code) {
  const error = { title: 'Error:', description: 'Please Try Again.' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'Invalid Email Address';
      break;
    case 'auth/user-disabled':
      error.description = 'Account is Disabled';
      break;
    case 'auth/user-not-found':
      error.description = 'User Not Found';
      break;
    case 'auth/wrong-password':
      error.description = 'Password is Incorrect';
      break;
    default:
  }
}
