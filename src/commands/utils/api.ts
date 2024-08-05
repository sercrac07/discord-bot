import { EmbedBuilder, SlashCommandBuilder } from "discord.js"

import type { ApiResponse } from "../../types/pokeapi"
import type { Command } from "../../types"

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName("api")
    .setDescription("Obtiene la API de un servicio.")
    .addStringOption(opt => opt.setName("pokemon").setDescription("Nombre del Pokémon.").setRequired(true)),

  async execute(client, interaction) {
    const pokemon = interaction.options.getString("pokemon", true)

    try {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = (await api.json()) as ApiResponse

      const embedResponse = new EmbedBuilder()
        .setTitle(`Información de **${data.name}**`)
        .setFields(
          {
            name: "Altura:",
            value: data.height.toString(),
            inline: true,
          },
          {
            name: "Peso:",
            value: data.weight.toString(),
            inline: true,
          },
          {
            name: "Tipo:",
            value: data.types.map(type => type.type.name).join(", "),
            inline: true,
          },
          {
            name: "Abilidades:",
            value: data.abilities.map(ability => ability.ability.name).join(", "),
            inline: true,
          }
        )
        .setColor("Random")
        .setThumbnail(data.sprites.other["official-artwork"].front_default)

      return await interaction.reply({
        embeds: [embedResponse],
        ephemeral: true,
      })
    } catch (error) {
      console.error(error)
      return await interaction.reply({
        content: `No se pudo obtener el Pokémon: ${pokemon}`,
        ephemeral: true,
      })
    }
  },
}
