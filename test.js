window.axios = 'axios'; 

const getTweets = () => {
    return axios.get('/api/tweets')
    //{msg: "This is the users route"}
}

const fetchTweets = () => dispatch => (
    getTweets()
)

