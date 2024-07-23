import 'dotenv/config'
import { Client, Collection } from 'discord.js'

import type { GlobClient } from './types'
import { handleEvents } from './handlers/events'
import { CONFIG } from './consts'

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
}) as GlobClient

client.config = CONFIG
client.events = new Collection()
client.commands = new Collection()

handleEvents(client)

client.login(process.env.DISCORD_TOKEN)
