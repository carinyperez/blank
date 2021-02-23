import axios from 'axios'; 

export const setAuthToken = token => {
    // token will be removed from memory once the user is logged out or when the token has expired
    if(token) {
        axios.defaults.headers.common['Authorization'] = token; 
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


// pass data to register link 
export const signup = (userData) => {
    return axios.post('api/users/register', userData)
};

// pass data to register login 
export const login = (userData) => {
    console.log(userData); 
    return axios.post('/api/users/login', userData); 
}; 





