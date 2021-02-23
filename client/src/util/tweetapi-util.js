import axios from 'axios'; 

// get tweets
export const getTweets = () => {
    return axios.get('/api/tweets')
}


// get tweets by user id
export const getUserTweets = is => {
    return axios.get(`/api/tweets/user/${id}`)
}

// write tweet
export const writeTweet = data => {
    return axios.post('/api/tweets', data)
9}