import { useEffect } from "react";
import { Pokemon } from "@/types/pokemon";
import { fetchSpecies, fetchDamageRelations } from "@/services/pokemon";

const useFetchPokemonDetails = (pokemon: Pokemon) => {
  const { id, types } = pokemon;

  const fetchDetails = async () => {
    const speciesDetails = await fetchSpecies(id);
    const damageRelations = await fetchDamageRelations(types);

    pokemon = {
      ...pokemon,
      ...speciesDetails,
      ...damageRelations,
    };
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return pokemon;
};

export default useFetchPokemonDetails;
