require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()

const { PORT } = process.env

app.use(cors())

app.use(express.json())

const inputRoutes = require("./routes/input")
app.use("/input", inputRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
