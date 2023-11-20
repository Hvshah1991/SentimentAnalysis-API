require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()

const { PORT, CORS_ORIGIN } = process.env

app.use(cors({ origin: CORS_ORIGIN }))

app.use(express.json())

const inputRoutes = require("./routes/input")
app.use("/input", inputRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})