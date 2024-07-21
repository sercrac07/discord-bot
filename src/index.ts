import 'dotenv/config'

import { Client, Collection } from 'discord.js'
import { GlobCLient } from './types'
import { handleEvents } from './handlers/events'

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
}) as GlobCLient

client.events = new Collection()

handleEvents(client)

client.login(process.env.DISCORD_TOKEN)
