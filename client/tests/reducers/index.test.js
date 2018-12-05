import test from 'ava';
import { initialAppState, appReducer } from './../../reducers';
import { appError } from './../../actions';

test('should verify the initial state', t => {
  let expected = {
    error: {
      message: ''
    },
    serverUrl: window.location.origin
  };
  t.deepEqual(initialAppState, expected);
});

test('should reduce the application error action', t => {
  const newState = appReducer(initialAppState, appError('Some Message'));
  t.deepEqual(newState, {
    error: {
      message: 'Some Message'
    },
    serverUrl: window.location.origin
  });
});
