var path = require('path')
const express = require('express')
var cors = require('cors')
const getText = require('./MeaningCloud')

const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('../client/views/index.html'));
})

app.post('/nlp', async function (req, res) {
    const nlpResponse = await getText(req.body.text)
    res.status(200).send(nlpResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(5000, async function () {
    await console.log('Example app listening on port 5000!')
})

module.exports = app;