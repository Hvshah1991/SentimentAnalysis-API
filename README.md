# Senti Messages

## Back-End Overview

Using Express - we are communicating with Google Cloud Natural Language to send text and recieve response.

### Description

Senti uses Google Cloud Natural Language's Sentiment analysis method. The score of a message's sentiment indicates the overall emotion. 
The magnitude of a message's sentiment indicates how much emotional content is present within, and this value is often proportional to the length of the content.

# Getting Started

## Dependencies
* @google-cloud/language
* axios
* cors
* dotenv
* express
* nodemon

## Steps
* Set-Up Google Cloud Natural Language: https://cloud.google.com/natural-language/docs/setup

* Install the Natural Language API client library

* Install nodemon and in your terminal: npx nodemon index.js - this will start the server

* Also, don't forget to set the .env file per your convenience. Choose the port of your preference.

* The back-end server should be running for it to communicate with Google's NLP API.


## Help

Any advise or help regarding issues, you can contact: harshvshah.22@gmail.com

## Authors

Contributors names and contact info:
* Harsh Shah [@_AIARXR](https://twitter.com/_AIARXR)
* Arvin Josol

## License

This project is licensed under the MIT License.

## Version History! :tada:

* 0.1
    * Initial Release

## Acknowledgments

* Inspiration: my pair-programming project with Arvin Josol
