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
    case 'auth/email-already-in-use':
      error.description = 'Email Address Already In Use';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'Action is Not Allowed';
      break;
    case 'auth/weak-password':
      error.description = 'Password Too Easy';
      break;
    default:
  }
  return error;
}
