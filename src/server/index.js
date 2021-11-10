const PORT = 3000 // Our Server Port
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

// Here  I used env file to keep my API away when uploading this code on github
const dotenv = require('dotenv')
dotenv.config()

const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

// Making get request on my server page to show the project home
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Making post request to fetch the data from API and show it with a "/result" URL
app.post('/result', async function(req, res) {
    // Using try & catch with fetching data
    try{
        const userInputURL = req.body.formText;
        console.log(`Your input is: ${userInputURL}`);
        const apiURL = `${process.env.API_SITE_URL}?key=${process.env.API_KEY}&url=${userInputURL}&lang=en`// Using env file
        const response = await fetch(apiURL) // This fetch function is provided by node-fetch dependency
        const mcData = await response.json()
        console.log(mcData)
        res.send(mcData)
    }catch(error) {
        console.log(error)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
