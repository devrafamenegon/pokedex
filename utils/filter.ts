import { Pokemon, PokemonType } from "@/types/pokemon";

const filterSelectedType = (list: Pokemon[], type: string) => {
  if (type !== "Todos os tipos") {
    list = list.filter((pokemon) =>
      pokemon.types.includes(type.toLowerCase() as PokemonType)
    );
  }

  return list;
};

const filterSearchQuery = (list: Pokemon[], query: string) => {
  if (query.trim() !== "") {
    list = list.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return list;
};

export const filterPokemonList = (
  list: Pokemon[],
  type: string,
  query: string
) => {
  list = filterSelectedType(list, type);
  list = filterSearchQuery(list, query);

  return list;
};
