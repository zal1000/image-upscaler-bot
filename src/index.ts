import * as Discord from 'discord.js'
import * as admin from 'firebase-admin'

import { init } from './helpers/init'

const bot = new Discord.Client();

admin.initializeApp()

const db = admin.firestore();

start()

async function start() {
    const isSuccess = await init(bot);
    if(isSuccess) {
        console.log('Bot successfuly initialized!');
        startMessageListen(bot);
    }
}

async function startMessageListen(bot: Discord.Client) {
    bot.on('message', async (msg) => {
        console.log(msg.content);
    })
}