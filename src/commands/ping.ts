import { ForestBotApiClient } from 'forestbot-api';
import type Bot from '../structure/mineflayer/Bot.js';

export default {
    commands: ['ping'],
    minArgs: 0,
    maxArgs: 1,
    execute: async (user, args, bot, api: ForestBotApiClient) => {
        const search = args[0] ? args[0] : user;
        try {
            let str = ``
            const ping = bot.bot.players[search].ping;
            str = `${search}: ${ping}ms`;
            if (ping == 0) str = `${search}: ${ping}ms (Most likely just joined.)`;


            bot.bot.chat(str);
        
            return
        }
        catch { return }
    }
 } as MCommand