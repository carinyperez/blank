// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'; 
// import logger from 'redux-logger'; 

// import rootReducer from '../reducers/root_reducer'; 

// const configureStore = (preloadedState = {}) => (
//     createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk, logger)
//     )
// );

// export default configureStore; 


import {createStore, applyMiddleware} from 'redux'; 
import logger from 'redux-logger'; 
import RootReducer from '../reducers/root_reducer';

import {persistStore} from 'redux-persist'; 
import thunk from 'redux-thunk'; 


const middlewares = [thunk]; 

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

const store = createStore(RootReducer, applyMiddleware(...middlewares)); 

const persistor = persistStore(store); 

export {store, persistor}; 

