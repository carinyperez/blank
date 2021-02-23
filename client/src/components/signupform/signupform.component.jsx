import React from 'react'; 
import { withRouter } from 'react-router-dom';
import './signupform.styles.scss'; 

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            email: '', 
            handle: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    // if user not signed send to login 
    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('login'); 
        }
        // set or clear errors 
        this.setState({errors: nextProps.errors})
    }

    // update field updates 
    update = (field) => {
        return e => this.setState({
            [field] : e.currentTarget.value 
        })
    }

    // handle form submission 
    handleSubmit = (e) => {
        e.preventDefault(); 

        let user = {
            email: this.state.email, 
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
        }; 
        this.props.signup(user, this.props.history); 
    }
    
    // render session errors 
    renderErrors = () => {
        const {errors} = this.state; 
        return (
            <ul>
                {Object.keys(this.state.errors).map((err, i)=> {
                    <li key ={`error-${i}`}>
                        {this.state.errors[errors]}
                    </li>
                })
                
                }
            </ul>
        )
    }

    render() {
        return (
            <div className='form-container'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email'></input>
                    <br/>
                    <input type='text' value={this.state.handle}  onChange={this.update('handle')} placeholder='Handle'></input>
                    <br/>
                    <input type='password' value={this.state.password}  onChange={this.update('password')} placeholder='Password'></input>
                    <br/>
                    <input type='password' value={this.state.password2}  onChange={this.update('password2')} placeholder='Confirm your password'></input>
                    <br/>
                    <input type='submit' value='Submit' className='submit'></input>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }

}

export default withRouter(SignUpForm); 

