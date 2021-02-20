import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'; 
// import configureStore, { store } from './store/store';
// parse the user's session token 
import jwt_decode from 'jwt-decode'; 
// session utility 
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import {store} from './store/store'; 
import Root from './components/root/root';


document.addEventListener('DOMContentLoaded', () => {
  // let store; 

  // if(localStorage.jwtToken) {
  //   setAuthToken(localStorage.jwtToken);
  //   const decodedUser = jwt_decode(localStorage.jwtToken); 
  //   const preloadedState = {session: {isAuthenticated: true, user: decodedUser}}

  //   store = configureStore(preloadedState); 
    
  //   const currentTime = Date.now() / 1000; 

  //   // if the user's token has expired logout user and redirect to login 
  //   if(decodedUser.exp < currentTime) {
  //     store.dispatch(logout()); 
  //     window.location.href = '/login'
  //   } else {
  //     // if first time user empty store 
  //     store = configureStore({}); 
  //   }
  // }
  // render our root component and pass the store as a prop
  const root = document.getElementById('root'); 
  ReactDOM.render(<Root store={store}/>, root);
})

