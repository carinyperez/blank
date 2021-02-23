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
// dispatches an array of tweets 
export const fetchTweets = () => dispatch => (
    // api call to ('/api/tweets')then dispatch action 
    getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => console.log(err))
)

export const fetchUserTweets = id => dispatch => (
    //axios.get(`/api/tweets/user/${id}`)
    getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
    writeTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => console.log(err))
)