import { Pokemon, PokemonType } from "@/types/pokemon";

const POKEMON_API_URL = process.env.EXPO_PUBLIC_POKEMON_API_URL;

export interface SpeciesResponseDto {
  capture_rate: number;
  gender_rate: number;
  flavor_text: string;
  genus: string;
}

export const fetchSpecies = async (id: number): Promise<SpeciesResponseDto> => {
  const res = await fetch(`${POKEMON_API_URL}/pokemon-species/${id}`);

  const { capture_rate, gender_rate, flavor_text_entries, genera } =
    await res.json();

  const flavor_text = getFlavorText(flavor_text_entries);
  const genus = getGenus(genera);

  return { capture_rate, gender_rate, flavor_text, genus };
};

interface TypeDto {
  name: string;
  url: string;
}

interface DamageRelationsDto {
  double_damage_from: TypeDto[];
  double_damage_to: TypeDto[];
  half_damage_from: TypeDto[];
  half_damage_to: TypeDto[];
  no_damage_from: TypeDto[];
  no_damage_to: TypeDto[];
}

export interface DamageRelationsResponseDto {
  double_damage_from: PokemonType[];
  double_damage_to: PokemonType[];
}

export const fetchDamageRelations = async (
  types: string[]
): Promise<DamageRelationsResponseDto> => {
  const damageRelationsPromises = types.map(async (type) => {
    const res = await fetch(`${POKEMON_API_URL}/type/${type}`);

    const { damage_relations }: { damage_relations: DamageRelationsDto } =
      await res.json();

    const double_damage_from = damage_relations.double_damage_from.map(
      (damageFromInfo) => damageFromInfo.name
    );

    const double_damage_to = damage_relations.double_damage_to.map(
      (damageToInfo) => damageToInfo.name
    );

    return {
      double_damage_from,
      double_damage_to,
    };
  });

  const damageRelations = await Promise.all(damageRelationsPromises);

  const double_damage_from_list: PokemonType[] = [];
  const double_damage_to_list: PokemonType[] = [];

  damageRelations.forEach(({ double_damage_from, double_damage_to }) => {
    double_damage_from_list.push(...(double_damage_from as PokemonType[]));
    double_damage_to_list.push(...(double_damage_to as PokemonType[]));
  });

  return {
    double_damage_from: [...new Set(double_damage_from_list)],
    double_damage_to: [...new Set(double_damage_to_list)],
  };
};

const fetchPokemon = async (pokemon: any): Promise<Pokemon | null> => {
  try {
    const res1 = await fetch(pokemon.url);
    const { id, name, types, abilities, weight, height } = await res1.json();

    return {
      id,
      name,
      types: getTypes(types),
      abilities,
      weight,
      height,
    };
  } catch (error) {
    console.error("Erro ao obter detalhes do Pokémon:", error);
    return null;
  }
};

export const fetchAllPokemons = async (
  currentPage: number,
  currentOrder: "asc" | "desc",
  limit: number
): Promise<Pokemon[]> => {
  try {
    const offset =
      currentOrder === "asc"
        ? currentPage * limit
        : 10000 - (currentPage + 1) * limit;

    const response = await fetch(
      `${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    const detailedPokemonList: Pokemon[] = await Promise.all(
      data.results.map(fetchPokemon)
    );

    return detailedPokemonList.filter((pokemon) => pokemon !== null);
  } catch (error) {
    console.error("Erro ao buscar os Pokémons:", error);
    return [];
  }
};

interface FlavorTextEntriesDto {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

const getFlavorText = (flavorTextEntries: FlavorTextEntriesDto[]) => {
  const flavorTextInfo = flavorTextEntries.find(
    (flavorTextInfo) => flavorTextInfo.language.name === "en"
  );

  return flavorTextInfo ? flavorTextInfo.flavor_text : "";
};

interface GeneraDto {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

const getGenus = (genera: GeneraDto[]) => {
  const genusInfo = genera.find(
    (generaInfo) => generaInfo.language.name === "en"
  );

  return genusInfo ? genusInfo.genus.replace("Pokémon", "") : "";
};

interface TypesDto {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const getTypes = (types: TypesDto[]) => {
  const mappedTypes = types.map(
    (typeInfo) => typeInfo.type.name
  ) as PokemonType[];

  return mappedTypes;
};
