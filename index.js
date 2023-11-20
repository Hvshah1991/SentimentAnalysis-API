const express = require('express');
const app = express();
//const quickstart = require('./routes/quickstart');

require('dotenv').config();
const { PORT } = process.env


app.post('/', (_req, res) => {
    res.send('Hello, your request is received')
})


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

