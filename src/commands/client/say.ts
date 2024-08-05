import { SlashCommandBuilder } from "discord.js"

import type { Command } from "../../types"

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("El bot envía un mensaje por ti.")
    .setDMPermission(false)
    .addStringOption(opt => opt.setName("mensaje").setDescription("El mensaje que se enviará.").setRequired(true)),

  async execute(client, interaction) {
    const messageOption = interaction.options.getString("mensaje", true)

    await interaction.channel!.send(messageOption)
    await interaction.reply({
      content: "Tu mensaje se ha enviado correctamente.",
      ephemeral: true,
    })
  },
}
