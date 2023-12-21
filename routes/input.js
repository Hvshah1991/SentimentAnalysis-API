const express = require("express")
const router = express.Router()
// enables express to parse json in request
router.use(express.json())

async function getTextSentiment(req) {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Instantiates a client
    const client = new language.LanguageServiceClient();

    // The text to analyze; Replace placeholder with input
    const text = req.body.data;

    // console.log(req.body);

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

    return sentiment
}

router.post("/", async (req, res) => {
    const sentiment = await getTextSentiment(req)
    res.send(sentiment)
})

module.exports = router