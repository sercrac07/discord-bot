import type { Button } from "../../types"

export const button: Button = {
  name: "add-role",

  async execute(client, interaction, rolId) {
    if (Array.isArray(interaction.member!.roles)) return
    await interaction.member!.roles.add(rolId)

    await interaction.reply({ content: "Rol añadido!", ephemeral: true })
  },
}
