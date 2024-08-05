import type { Event } from "../../types"
import { handleCommands } from "../../handlers/commands"
import { handleButtons } from "../../handlers/buttons"

export const event: Event<"ready"> = {
  name: "ready",
  once: true,

  execute(client) {
    console.log(`[CLIENT] ${client.user.username} está online!`)

    handleCommands(client)
    handleButtons(client)
  },
}
