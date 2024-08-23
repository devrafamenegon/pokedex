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
  types: PokemonType[]
  img: string
}