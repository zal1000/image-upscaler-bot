import * as Discord from "discord.js";
import * as admin from "firebase-admin";

import { init } from "./helpers/init";

const ai = require("deepai");

const bot = new Discord.Client();

admin.initializeApp();

// const db = admin.firestore();

start();

async function start() {
  const isSuccess = await init(bot);
  if (isSuccess) {
    console.log("Bot successfuly initialized!");
    startMessageListen(bot);
  }
}

async function startMessageListen(bot: Discord.Client) {
  const prefix = "<@!866002410774462475>";
  bot.on("message", async (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    const command = msg.content.substring(prefix.length);
    console.log(command);
    console.log(msg.attachments);
		const imageurl: any = msg.attachments.first()?.url;
		if (command === " upscale" && msg.attachments.firstKey() !== undefined) {
      const resp = await ai.callStandardApi("torch-srgan", {
        image: imageurl,
      });
      console.log(resp);
			msg.channel.send(resp.output_url);
    }
  });
}
