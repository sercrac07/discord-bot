interface Ability {
  name: string
  url: string
}

interface PokemonAbility {
  ability: Ability
  is_hidden: boolean
  slot: number
}

interface Form {
  name: string
  url: string
}

interface Move {
  name: string
  url: string
}

interface MoveLearnMethod {
  name: string
  url: string
}

interface VersionGroup {
  name: string
  url: string
}

interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

interface PokemonMove {
  move: Move
  version_group_details: VersionGroupDetail[]
}

interface Species {
  name: string
  url: string
}

interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: any
}

interface Stat {
  name: string
  url: string
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: Stat
}

interface Type {
  name: string
  url: string
}

interface PokemonType {
  slot: number
  type: Type
}

export interface ApiResponse {
  abilities: PokemonAbility[]
  base_experience: number
  forms: Form[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: PokemonMove[]
  name: string
  order: number
  species: Species
  sprites: Sprites
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}
