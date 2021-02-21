import React from 'react'; 
import { withRouter } from 'react-router-dom';
import './loginform.styles.scss'; 

class LoginForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            email: '', 
            password: '',
            errors: {}
        }
    }

    // if user authenticated, redirect to Tweets page 
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('tweets'); 
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
            password: this.state.password
        }; 

        this.props.login(user); 
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
                    <input type='password' value={this.state.password}  onChange={this.update('password')}placeholder='Password'></input>
                    <br/>
                    <input type='submit' value='Submit' className='submit'></input>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }

}

export default withRouter(LoginForm); 