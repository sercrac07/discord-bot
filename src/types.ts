import type { ChatInputCommandInteraction, Client, ClientEvents, Collection, SharedSlashCommand } from 'discord.js'

import { CONFIG } from './consts'

export type GlobClient = Client<true> & ExtraClient

interface ExtraClient {
  config: typeof CONFIG
  events: Collection<keyof ClientEvents, () => void>
  commands: Collection<string, Command>
}

export interface Event<T extends keyof ClientEvents> {
  name: T
  rest?: boolean
  once?: boolean
  execute: (client: GlobClient, ...args: ClientEvents[T]) => void
}

export interface Command {
  data: SharedSlashCommand
  developer?: boolean
  execute: (client: GlobClient, interaction: ChatInputCommandInteraction) => void
}
