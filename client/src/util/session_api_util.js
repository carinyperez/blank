import axios from 'axios'; 

export const setAuthToken = token => {
    // token will be removed from memory once the user is logged out or when the token has expired
    if(token) {
        axios.defaults.headers.common['Authorization'] = token; 
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

