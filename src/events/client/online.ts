import type { Event } from "../../types"
import { handleCommands } from "../../handlers/commands"
import { handleButtons } from "../../handlers/buttons"

import mongoose from "mongoose"

export const event: Event<"ready"> = {
  name: "ready",
  once: true,

  async execute(client) {
    console.log(`[CLIENT] ${client.user.username} está online!`)

    await mongoose
      .connect("mongodb://localhost:27017/")
      .then(() => console.log("[MONGODB] Conectado a la base de datos!"))
      .catch(() => console.error("[MONGODB] Error al conectar a la base de datos!"))

    handleCommands(client)
    handleButtons(client)
  }
}
