require('dotenv').config();
const path = require('path');



const express = require('express');
const app = express()



// CORS 
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8000']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors(corsOptions))


// Static Folder
app.use(express.static('public'));


// Allow JSON in req
app.use(express.json());



// Routes
app.use('/', require('./routes/report'));


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})