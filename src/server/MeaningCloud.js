const axios = require('axios')

async function getText(myText) {
    const response = await axios({
        method: 'post',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        data: {
            "key": process.env.API_KEY,
            "txt": myText,
            'lang': 'en'
        }
    })
    return response.data
}

module.exports = getText