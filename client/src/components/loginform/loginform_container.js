import {connect} from 'react-redux';
import { login } from '../../redux/actions/actions';
import LoginForm from './loginform.component'; 



const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        // login: user => console.log('Tried to log in :', user)
        // using login thunk action from loginform_container
        login: user => dispatch(login(user))
    }
}




 const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

 export default LoginFormContainer; 