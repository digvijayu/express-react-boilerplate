import { combineReducers } from 'redux';

export const initialAppState = {
  error: {
    message: ''
  },
  serverUrl: window.location.origin
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'APPLICATION_ERROR':
      return {
        ...state,
        error: { message: action.message }
      };
    default:
      return state;
  }
};

export default combineReducers({
  appReducer
});
