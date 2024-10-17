export interface PokemonTypesObj {
  normal: string;
  fire: string;
  water: string;
  electric: string;
  grass: string;
  ice: string;
  fighting: string;
  poison: string;
  ground: string;
  flying: string;
  psychic: string;
  bug: string;
  rock: string;
  ghost: string;
  dragon: string;
  dark: string;
  steel: string;
  fairy: string;
}

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  abilities: Abilities[];
  weight: number;
  height: number;
  capture_rate?: number;
  gender_rate?: number;
  flavor_text?: string;
  genus?: string;
  double_damage_from?: PokemonType[];
  double_damage_to?: PokemonType[];
  evolution_chain?: Evolution[];
}

export interface Ability {
  id: number;
  name: string;
  url: string;
}

export interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Evolution {
  id: number;
  name: string;
  types: PokemonType[];
  sprite: string;
  condition: ConditionToEvolve | null;
}

export interface ConditionToEvolve {
  trigger: string;
  min_level?: number;
  item?: string;
  held_item?: string;
  min_affection?: number;
  min_beauty?: number;
  min_happiness?: number;
}
