import { Client } from "discord.js";

export const init = async (bot: Client): Promise<boolean> => {
    try {
        await bot.login(process.env.BOT_TOKEN).then(() => {
            console.log(`Logged in as ${bot.user?.tag}`);
        });

        // Fetch the bot cofiguration, cache it to quick.db and add listener

        return true;
    } catch (error) {
         console.error(error);
        return false;
    }
}