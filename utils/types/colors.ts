import { PokemonType, PokemonTypes } from "@/types/pokemon";

export const typeColors: PokemonTypes = {
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

export const types: string[] = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export const getTypeColor = (type: PokemonType): string => {
  return typeColors[type];
};

export const getTextColor = (backgroundColor: string) => {
  const color = backgroundColor.substring(1); // Remove o "#"
  const rgb = parseInt(color, 16); // Converte para inteiro RGB
  const r = (rgb >> 16) & 0xff; // Extrai o componente vermelho
  const g = (rgb >> 8) & 0xff; // Extrai o componente verde
  const b = (rgb >> 0) & 0xff; // Extrai o componente azul

  const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Calcula o brilho

  // Se o brilho for alto, use preto; caso contrário, use branco
  return brightness > 146 ? '#000' : '#fff';
};