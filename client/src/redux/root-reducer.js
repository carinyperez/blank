import {combineReducers} from 'redux'; 
import errors from './reducers/errors/errors.reducer';
import session from './reducers/session/session-reducer';

const RootReducer = combineReducers({
    session,
    errors
})

export default RootReducer; 