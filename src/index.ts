import 'dotenv/config'

import { Client } from 'discord.js'

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
})

client.on('ready', c => console.log(`${c.user.username} está online!`))

client.login(process.env.DISCORD_TOKEN)
