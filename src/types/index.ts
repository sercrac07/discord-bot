import type { ButtonInteraction, ChatInputCommandInteraction, Client, ClientEvents, Collection, SharedSlashCommand } from "discord.js"

import { CONFIG } from "../consts"

export type GlobClient = Client<true> & ExtraClient

interface ExtraClient {
  config: typeof CONFIG
  events: Collection<keyof ClientEvents, () => void>
  commands: Collection<string, Command>
  buttons: Collection<string, Button>
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

interface Component {
  name: string
}

export interface Button extends Component {
  execute: (client: GlobClient, interaction: ButtonInteraction, ...args: string[]) => void
}
