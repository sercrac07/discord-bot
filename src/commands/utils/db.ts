import { SlashCommandBuilder } from "discord.js"
import type { Command } from "../../types"
import { MDb } from "../../schemas/db"

export const command: Command = {
  data: new SlashCommandBuilder().setName("db").setDescription("Muestra la cantidad de veces que se ha ejecutado este comando."),

  async execute(client, interaction) {
    const dbData = await MDb.findOne({ userId: interaction.user.id })

    if (!dbData) {
      await MDb.create({ userId: interaction.user.id, count: 1 })
      return await interaction.reply({ content: "Es la primera vez que ejecutas este comando.", ephemeral: true })
    }

    dbData.count++
    await dbData.save()
    await interaction.reply({ content: `Se ha ejecutado ${dbData.count} veces.`, ephemeral: true })
  }
}
