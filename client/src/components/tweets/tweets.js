import React from 'react'; 
import { withRouter } from 'react-router-dom';
import Tweet from './tweet';


class Tweets extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            tweets: []
        }
    }

    // componentWillMount() {
    //     this.props.fetchTweets();
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({tweets: newState.tweets})
    // }

    render() {
        if(this.state.tweets.length === 0) {
            return (<div>There are no Tweets</div>)
        } else {
            return (
                <div>
                    <h2>All Tweets</h2>
                    <p>Text here</p>
                </div>
            )
        }
    }
}

// {this.state.tweets.map(tweet => (
//     <Tweet key={tweet._id} text={tweet.text}/>
// ))}

export default withRouter(Tweets);