import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'
import { Command } from '../../types'

export const command: Command = {
  data: new SlashCommandBuilder()
    .setName('añadir-rol')
    .setDescription('Añade un rol a un usuario.')
    .setDMPermission(false)
    .addUserOption(opt => opt.setName('usuario').setDescription('El usuario a añadir el rol.').setRequired(true))
    .addRoleOption(opt => opt.setName('rol').setDescription('El rol a añadir al usuario.').setRequired(true)),

  async execute(client, interaction) {
    if (typeof interaction.member!.permissions === 'string') return
    if (!interaction.member!.permissions.has(PermissionFlagsBits.ManageRoles)) return await interaction.reply({ content: 'No tienes permisos para añadir roles.', ephemeral: true })

    const member = interaction.options.getMember('usuario')!
    const role = interaction.options.getRole('rol', true)

    if (Array.isArray(member.roles)) return
    await member.roles.add(role.id)

    await interaction.reply({ content: `El rol ${role} ha sido añadido al usuario ${member}.`, ephemeral: true })
  },
}
