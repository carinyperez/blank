import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'; 
import jwt_decode from 'jwt-decode'; 
import Root from './components/root/root';
import {configureStore} from './redux/store'; 
import { setAuthToken } from './util/sessionapi-util';
import { logout } from './redux/actions/actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

window.axios = axios; 



