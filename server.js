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


// Allow JSON in req
app.use(express.json());


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})