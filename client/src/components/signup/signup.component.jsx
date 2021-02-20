import SignUpForm from "../signupform/signupform.component";
import './signup.styles.scss';


const SignUp = () => {
    return (
        <div className='signup'>
            <h1>Chirper</h1>
            <SignUpForm/>
        </div>
    )
}

export default SignUp; 