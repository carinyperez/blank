import {connect} from 'react-redux'; 
import { fetchTweets } from '../../redux/actions/tweet-actions';
import Tweets from './tweets';

const mapStateToProps = (state) => {
    return {
        tweets: Object.values(states.tweets.all)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTweets: () => dispatch(fetchTweets())
    }
}

const TweetsContainer = connect(mapStateToProps,mapDispatchToProps)(Tweets); 

export default TweetsContainer;