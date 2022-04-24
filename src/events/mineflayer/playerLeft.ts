import type { Player } from "mineflayer";
import type Forestbot  from "../../structure/mineflayer/Bot";
import { client }      from "../../index.js";

export default {
    name: "playerLeft",
    once: false,
    run: async (player: Player, Bot: Forestbot) => {

        const user = {
            username: player.username,
            uuid:     player.uuid
        }

        client.chatEmbed(`> ${user.username} left`, "red");
     
        await Bot.endpoints.updateLeave(
            user.username,
            Bot.mc_server
        )

        return;
    }
}