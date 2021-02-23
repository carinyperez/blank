import { getTweets,getUserTweets,writeTweet } from "../../util/tweetapi-util";

export const RECEIVE_TWEETS =  'RECEIVE_TWEETS'; 
export const RECEIVE_USER_TWEETS =  'RECEIVE_USER_TWEETS'; 
export const RECEIVE_NEW_TWEET =  'RECEIVE_NEW_TWEET'; 

// action creator is a function that returns an action object with a type 
export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS ,
    tweets
})

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
})

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
})

// an action thunk is an action creator that returns a function as an action 
export const fetchTweets = () => dispatch => (
    // api call to ('/api/tweets')then dispatch action 
    getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => console.log(err))
)