import React from 'react'; 
import { render } from 'react-dom';
import {connect} from 'react-redux'; 
import {Route, Redirect, withRouter} from 'react-router-dom';


const Auth = ({component: Component, path, loggedIn, exact}) => {
    return (
        <Route>
            {!loggedIn ? (<Component path={path} exact={exact}/>) : (<Redirect to='/tweets'/>)}
        </Route> 
    )
}


const Protected = ({component: Component,loggedIn, ...rest}) => {
    return (
        <Route>
            {loggedIn ? (<Component loggedIn={loggedIn} props={rest}/>) : (<Redirect to='/login'/>)}
        </Route> 
    )
}
// const Protected = ({component: Component,loggedIn, ...rest}) => {
//     <Route
//         {...rest}
//         render={ 
//         props => 
//         loggedIn ? (<Component {...props}/>) : (<Redirect to='/login'/>)
//         }
//     />
// }

// use this authenticated slice of state to determine whether a user is logged in 
const mapStateToProps = state => (
    {loggedIn: state.session.isAuthenticated}
); 


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth)); 
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected)); 