import './form.styles.scss'; 

const Form = () => {
    return (
        <div className='form-conatiner'>
            <form className='form'>
                <input type='email' placeholder='Email'></input>
                <input type='text' placeholder='Password'></input>
                <input type='submit' className='submit'></input>
            </form>
        </div>
    )
}

export default Form; 