import {connect} from 'react-redux'; 
import { signup } from '../../redux/reducers/session/session-actions';
import SignUpForm from './signupform.component'; 


const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user))
    }
}

 const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpForm );

 export default SignUpFormContainer; 