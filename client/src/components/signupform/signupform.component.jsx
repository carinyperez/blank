import './signupform.styles.scss'; 

const SignUpForm = () => {
    return (
        <div className='form-container'>
            <form className='form'>
                <input type='email' placeholder='Email'></input>
                <input type='text' placeholder='Handle'></input>
                <input type='text' placeholder='Password'></input>
                <input type='text' placeholder='Confirm Password'></input>
                <input type='submit' className='submit'></input>
            </form>
        </div>
    )
}

export default SignUpForm ; 