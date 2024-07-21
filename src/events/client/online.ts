import { Event } from '../../types'

export const event: Event<'ready'> = {
  name: 'ready',
  once: true,

  execute(client) {
    console.log(`[CLIENT] ${client.user.username} está online!`)
  },
}
