let userInput = []
const PORT = 8081
const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//var aylien = require("aylien_textapi");

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname, "nmbdvjhsv")

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/result', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${process.env.BASE_API_URL}key=${process.env.API_KEY}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const mcData = await response.json()
    console.log(mcData)
    res.send(mcData)
    /** server sends only specified data to the client with below codes
     * const projectData = {
     *  score_tag : mcData.score_tag,
     *  agreement : mcData.agreement,
     *  subjectivity : mcData.subjectivity,
     *  confidence : mcData.confidence,
     *  irony : mcData.irony
     * }
     * res.send(projectData);
     * */
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
