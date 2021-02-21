import {connect} from 'react-redux';
import { login } from '../../util/sessionapi-util';
import LoginForm from './loginform.component'; 



const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

 const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

 export default LoginFormContainer; 