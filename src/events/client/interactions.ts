import type { Event } from '../../types'

export const event: Event<'interactionCreate'> = {
  name: 'interactionCreate',

  async execute(client, interaction) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) return

      if (command.developer && !client.config.developers.includes(interaction.user.id)) return await interaction.reply({ content: 'Este comando solo lo pueden ejecutar los desarrolladores del bot.', ephemeral: true })

      command.execute(client, interaction)
    }
  },
}
