import Bot            from "./structure/mineflayer/Bot.js";
import Client         from "./structure/discord/client.js";
import * as Conf      from "./config.js";
export * as endpoints from "./structure/endpoints/endpoints.js";
export * as logger    from "./functions/utils/logger.js"

/**
 * Main config and colors .json files.
 */
const { colors, config } = Conf;

/**
 * @class Options
 * Main options for various functions.
 */
const options = new Conf.default();

/**
 * @class Client
 * Discord bot class
 */
const client = new Client(options.discord); 

/**
 * @class Bot
 * Mineflayer bot class
 */
const bot = new Bot(options.mineflayer);

export { 
    colors, 
    config, 
    options, 
    client, 
    bot 
};