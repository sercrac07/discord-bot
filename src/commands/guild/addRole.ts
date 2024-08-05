import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from "discord.js"
import { Command } from "../../types"

export const command: Command = {
  data: new SlashCommandBuilder().setName("añadir-rol").setDescription("Añade un rol a un usuario.").setDMPermission(false),

  async execute(client, interaction) {
    const rowButtons = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder().setCustomId("add-role_1266845049153519637").setLabel("Miembro").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("add-role_1269977464524898407").setLabel("Admin").setStyle(ButtonStyle.Danger)
    )

    await interaction.reply({
      content: "¿Quieres obtener un rol?",
      components: [rowButtons],
    })
  },
}
