require('dotenv').config()
const express = require("express")
const app = express()

const { PORT, CORS_ORIGIN } = process.env

const inputRoutes = require("./routes/input")
app.use("/input", inputRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})