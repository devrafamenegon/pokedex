export interface PokemonTypes {
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

export type PokemonType = keyof PokemonTypes;

export interface Pokemon {
  id: number,
  name: string,
  types: PokemonType[],
  abilities: Abilities[],
  weight: number,
  height: number,
  capture_rate: number,
  gender_rate: number,
  flavor_text: string,
  genus: string,
}

export interface Ability {
  name: string,
  url: string
}

export interface Abilities {
  ability: Ability
  is_hidden: boolean,
  slot: number
}