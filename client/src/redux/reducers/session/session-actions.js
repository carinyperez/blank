import * as APIUtil from "../../../util/sessionapi-util";
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT'; 
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN '; 


// we will dispatch this when our user signs in 
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
})

// redirect user to the login page upon signin 
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
})

// show authentication errors on the front end 

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors 
})


// when user is logged out, sets authenticated to false 
export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

// upon signup dispatch action based on response from backend 
export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
        ), err => (
            dispatch(receiveErrors(err.response.data))
    ))
);

// upon login, set the session token and dispatch the current user
// dispatch errors on failure 
export const login = user => dispatch => (
    // pass data to register login route 
    APIUtil.login(user).then(res => {
        console.log(res); 
        const {token} = res.data;
        localStorage.setItem('jwtToken', token);
        // token will be removed from memory once the user is logged out or when the token has expired
        APIUtil.setAuthToken(token); 
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })

)

export const logout = () => dispatch => {
    // remove the token from local storage 
    localStorage.removeItem('jwtToken')
    // remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // dispatch a logout action 
    dispatch(logoutUser())
}

