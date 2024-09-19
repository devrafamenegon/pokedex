import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pokemon } from "@/types/pokemon";

const useFetchPokemons = () => {
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemonDetails = async (pokemon: any) => {
    try {
      const res1 = await fetch(pokemon.url);
      const { id, name, types, abilities, weight, height } = await res1.json();

      const mappedTypes = types.map((typeInfo: any) => typeInfo.type.name);

      const res2 = await fetch(
        `${process.env.EXPO_PUBLIC_POKEMON_API_URL}/pokemon-species/${id}`
      );
      const { capture_rate, gender_rate, flavor_text_entries, genera } =
        await res2.json();

      const flavor_text = flavor_text_entries.find(
        (flavorTextInfo: any) => flavorTextInfo.language.name === "en"
      )?.flavor_text;

      const genus = genera
        .find((generaInfo: any) => generaInfo.language.name === "en")
        ?.genus.replace("Pokémon", "");

      const damageRelationsPromises = mappedTypes.map(async (type: string) => {
        const res = await fetch(
          `${process.env.EXPO_PUBLIC_POKEMON_API_URL}/type/${type}`
        );
        const { damage_relations } = await res.json();
        return {
          double_damage_from: damage_relations.double_damage_from.map(
            (damageFromInfo: any) => damageFromInfo.name
          ),
          double_damage_to: damage_relations.double_damage_to.map(
            (damageToInfo: any) => damageToInfo.name
          ),
        };
      });

      const damageRelations = await Promise.all(damageRelationsPromises);

      const double_damage_from_list: string[] = [];
      const double_damage_to_list: string[] = [];

      damageRelations.forEach((relation) => {
        double_damage_from_list.push(...relation.double_damage_from);
        double_damage_to_list.push(...relation.double_damage_to);
      });

      return {
        id,
        name,
        types: mappedTypes,
        abilities,
        weight,
        height,
        capture_rate,
        gender_rate,
        flavor_text,
        genus,
        double_damage_from: [...new Set(double_damage_from_list)],
        double_damage_to: [...new Set(double_damage_to_list)],
      };
    } catch (error) {
      console.error("Erro ao obter detalhes do Pokémon:", error);
      return null; // Retorna null ou algum valor default
    }
  };

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        // Verifica se os dados já estão em cache
        // const cachedPokemonList = await AsyncStorage.getItem("allPokemonList");
        // if (cachedPokemonList) {
        //   setAllPokemonList(JSON.parse(cachedPokemonList));
        //   setLoading(false);
        //   return;
        // }

        const response = await fetch(
          `${process.env.EXPO_PUBLIC_POKEMON_API_URL}/pokemon?limit=${process.env.EXPO_PUBLIC_POKEMON_API_LIMIT}`
        );
        const data = await response.json();

        const detailedPokemonList: Pokemon[] = await Promise.all(
          data.results.map(fetchPokemonDetails)
        );

        const filteredList = detailedPokemonList.filter(
          (pokemon) => pokemon !== null
        );

        setAllPokemonList(filteredList);
        await AsyncStorage.setItem(
          "allPokemonList",
          JSON.stringify(filteredList)
        );

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
        setLoading(false);
      }
    };

    fetchAllPokemons();
  }, []);

  return { allPokemonList, loading };
};

export default useFetchPokemons;
