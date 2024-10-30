import { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemon";
import {
  fetchSpecies,
  fetchDamageRelations,
  SpeciesResponseDto,
  DamageRelationsResponseDto,
} from "@/services/pokemon";
import { usePokemon } from "@/contexts/pokemon";

const useFetchPokemonDetails = (id: number) => {
  const { allPokemonList } = usePokemon();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [speciesDetails, setSpeciesDetails] = useState<SpeciesResponseDto>();
  const [damageRelations, setDamageRelations] =
    useState<DamageRelationsResponseDto>();

  // Função para buscar detalhes da espécie e das relações de dano
  const fetchDetails = async (id: number, types: string[]) => {
    try {
      const [speciesDetailsRes, damageRelationsRes] = await Promise.all([
        fetchSpecies(id),
        fetchDamageRelations(types),
      ]);
      setSpeciesDetails(speciesDetailsRes);
      setDamageRelations(damageRelationsRes);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  // Função para buscar o Pokémon específico na lista
  const fetchPokemon = (): Pokemon | undefined => {
    const pokemon = allPokemonList.find(
      (pokemon) => pokemon.id.toString() === id.toString()
    );
    if (!pokemon) {
      console.error("Error fetching Pokémon: Pokémon not found.");
    }
    return pokemon;
  };

  // useEffect para buscar dados do Pokémon ao inicializar ou ao atualizar o id
  useEffect(() => {
    const loadPokemonDetails = async () => {
      setIsLoading(true);
      const pokemon = fetchPokemon();
      if (pokemon) {
        await fetchDetails(pokemon.id, pokemon.types);
        setSelectedPokemon(pokemon); // Mantendo selectedPokemon separado
      }
      setIsLoading(false);
    };

    loadPokemonDetails();
  }, [id, allPokemonList]);

  return {
    pokemon: selectedPokemon,
    isLoadingDetails: isLoading,
    speciesDetails,
    damageRelations,
  };
};

export default useFetchPokemonDetails;
