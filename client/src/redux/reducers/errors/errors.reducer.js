import { combineReducers } from 'redux';

import sessionErrorsReducer from './session-errors-reducer';

const errors = combineReducers({
  session: sessionErrorsReducer
});

export default errors; 