import type { Client, ClientEvents, Collection } from 'discord.js'

export type GlobClient = Client<true> & ExtraClient

interface ExtraClient {
  events: Collection<keyof ClientEvents, () => void>
}

export interface Event<T extends keyof ClientEvents> {
  name: T
  rest?: boolean
  once?: boolean
  execute: (client: GlobClient, ...args: ClientEvents[T]) => void
}
