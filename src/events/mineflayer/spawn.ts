import type Bot   from "../../structure/mineflayer/Bot.js"
import time       from "../../functions/utils/time.js";
import { config } from "../../config.js";
export default { 
    name: "spawn",
    once: true,
    run: async (args: any[], Bot: Bot) => {
        Bot.restartCount = 0;
        Bot.isConnected = true;
        if (config.rotateHeadOnJoin) await time.sleep(2000);
        return
    }
}