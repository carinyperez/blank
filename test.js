const data = {
    tweet: 'hello'
}


const writeData = (data) => {
    console.log(data); 
}


const composeTweet = data => () => (
    writeData(data)
)

console.log(composeTweet(data)()); 



