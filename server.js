require('dotenv').config();
const path = require('path');



const express = require('express');
const app = express()


// Allow JSON in req
app.use(express.json());


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})