import { useState, useEffect } from "react";
import { ConditionToEvolve, Evolution } from "@/types/pokemon"; // Definir os tipos necessários

const useFetchEvolutions = (speciesId: number) => {
  const [evolutions, setEvolutions] = useState<Evolution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função recursiva para navegar pelas evoluções
  const extractEvolutions = async (chain: any): Promise<Evolution[]> => {
    let evolutions: Evolution[] = [];

    const processStage = async (currentStage: any) => {
      // Busque em /pokemon-species/ID
      const pokemonSpeciesRes = await fetch(currentStage.species.url);
      const { id } = await pokemonSpeciesRes.json();

      // Busque em /pokemon/ID
      const pokemonRes = await fetch(
        `${process.env.EXPO_PUBLIC_POKEMON_API_URL}/pokemon/${id}/`
      );
      const { types } = await pokemonRes.json();

      // Mapeamento dos tipos de Pokémon
      const mappedTypes = types.map((typeInfo: any) => typeInfo.type.name);

      const evolutionDetails = currentStage.evolution_details[0];
      const conditionsToEvolve: ConditionToEvolve | null = evolutionDetails
        ? {
            min_level: evolutionDetails.min_level ?? null,
            trigger: evolutionDetails.trigger.name,
            item: evolutionDetails.item?.name ?? null,
            held_item: evolutionDetails.held_item?.name ?? null,
            min_affection: evolutionDetails.min_affection ?? null,
            min_beauty: evolutionDetails.min_beauty ?? null,
            min_happiness: evolutionDetails.min_happiness ?? null,
          }
        : null;

      const evolution: Evolution = {
        id: id,
        name: currentStage.species.name,
        types: mappedTypes,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        condition: conditionsToEvolve,
      };

      evolutions.push(evolution);

      for (const nextStage of currentStage.evolves_to) {
        await processStage(nextStage); // Aguarda o processamento da próxima evolução
      }
    };

    // Começa a processar a cadeia inicial
    await processStage(chain);

    return evolutions;
  };

  const getPokemonEvolutionDetails = async (
    speciesId: number
  ): Promise<Evolution[] | null> => {
    try {
      // Obtenha a URL da cadeia de evolução
      const speciesRes = await fetch(
        `${process.env.EXPO_PUBLIC_POKEMON_API_URL}/pokemon-species/${speciesId}`
      );
      const { evolution_chain } = await speciesRes.json();

      // Faça o fetch da cadeia de evolução
      const evolutionChainRes = await fetch(evolution_chain.url);
      const { chain } = await evolutionChainRes.json();

      // Extraímos todas as evoluções da cadeia
      const evolutions = await extractEvolutions(chain);

      return evolutions;
    } catch (error) {
      console.error("Error fetching evolution details:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchEvolutions = async () => {
      try {
        const evolutions = await getPokemonEvolutionDetails(speciesId);

        if (evolutions) setEvolutions(evolutions);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvolutions();
  }, [speciesId]);

  return { evolutions, loading, error };
};

export default useFetchEvolutions;
