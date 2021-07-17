import { Client } from "discord.js";

const ai = require("deepai");

export const init = async (bot: Client): Promise<boolean> => {
    try {
        await bot.login(process.env.BOT_TOKEN).then(() => {
            console.log(`Logged in as ${bot.user?.tag}`);
        });

        ai.setApiKey(process.env.DEEPAI_KEY);
        console.log("DeepAI key set.");

        // Fetch the bot cofiguration, cache it to quick.db and add listener

        return true;
    } catch (error) {
         console.error(error);
        return false;
    }
}