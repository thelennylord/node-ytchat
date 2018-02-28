//This is just a test bot, the api will not stay the same. Limited implementations.

const messageListener = require('./lib/message/messageListener')
const messageSender = require('./lib/message/messageSender')
const accessTokenManager = require('./lib/auth/accessTokenManager')
const config = require('./config.json')


const atm = new accessTokenManager(require('./credentials.json').installed, config.refresh_token)

const listener = new messageListener(config.apiKey, config.chatID)
const sender = new messageSender({
    apiKey: config.apiKey,
    chatID: config.chatID,
    accessTokenManager: atm
})

listener.on('message', message => {
    if(message.snippet.content.startsWith("!hello")) {
        sender.sendMessage("Heya!")
    }
})