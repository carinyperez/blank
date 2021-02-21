import {combineReducers} from 'redux'; 
import sessionReducer from './reducers/session/session-reducer'; 

const RootReducer = combineReducers({
    session: sessionReducer
})

export default RootReducer; 