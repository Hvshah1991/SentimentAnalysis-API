require('dotenv').config()
const express = require("express")
const app = express()

const { PORT, CORS_ORIGIN } = process.env

async function quickstart() {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Instantiates a client
    const client = new language.LanguageServiceClient();

    // The text to analyze; Replace placeholder with input
    const text = 'Hello, world!';

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

app.post("/", (req, res) => {
    quickstart()
    res.send("Testing NLP api request from express server")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})