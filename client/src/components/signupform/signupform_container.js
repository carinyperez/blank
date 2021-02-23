import {connect} from 'react-redux'; 
import { signup } from '../../redux/actions/actions';
import SignUpForm from './signupform.component'; 


const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    }
}

// passes the signup prop to the sign up form component through connect 
const mapDispatchToProps = (dispatch) => {
    return {
        //signup: user => console.log("Tried to sign up user: ", user)
        signup: user => dispatch(signup(user))
    }

}

 const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpForm );

 export default SignUpFormContainer; 