import React from 'react'; 
import {Link} from 'react-router-dom'; 
import Tweet from '../tweets/tweet';
import './header.styles.scss';

class Header extends React.Component {
    constructor(props) {
        super(props); 
    }

    logoutUser = (e) => {
        e.preventDefault(); 
        this.props.logout(); 
    }

    getLinks = () => {
        if (this.props.loggedIn) {
            return (
                <div className='header'>
                    <Link to={"/tweets"} className='link'>All Tweets</Link>
                    <Link to={"/profile"} className='link'>Profile</Link>
                    <Link to={"/new_tweet"} className='link'>Write A Tweet</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            )
        } else {
            return(
                <div className='header'>
                    <Link to={"/signup"} className='link'>Signup</Link>
                    <Link to={"/login"} className='link'>Login</Link>
                </div>
            )
        }
            
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>

        )
    }

}


export default Header; 