import { EmbedBuilder, SlashCommandBuilder } from 'discord.js'

import type { Command } from '../../types'

export const command: Command = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Comprueba la conexión con el bot.'),

  async execute(client, interaction) {
    const delay = Date.now() - interaction.createdAt.getTime()

    const embedResponse = new EmbedBuilder().setTitle('Pong!').setDescription(`El bot responde con un delay de \`${delay}ms\`.`).setColor('Aqua')
    await interaction.reply({ embeds: [embedResponse], ephemeral: true })
  },
}
