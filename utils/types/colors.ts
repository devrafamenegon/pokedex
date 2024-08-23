import { PokemonType, PokemonTypes } from "@/types/pokemon";

const typeColors: PokemonTypes = {
  normal: '#919AA2',
  fire: '#FF9D55',
  water: '#5090D6',
  electric: '#F4D23C',
  grass: '#63BC5A',
  ice: '#73CEC0',
  fighting: '#CE416B',
  poison: '#B567CE',
  ground: '#D97845',
  flying: '#89AAE3',
  psychic: '#FA7179',
  bug: '#91C12F',
  rock: '#C5B78C',
  ghost: '#5269AD',
  dragon: '#0B6DC3',
  dark: '#5A5465',
  steel: '#5A8EA2',
  fairy: '#EC8FE6',
};

export const getTypeColor = (type: PokemonType): string => {
  return typeColors[type];
};
