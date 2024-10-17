import { useState, useEffect } from "react";
import { Evolution } from "@/types/pokemon";
import { getPokemonEvolutionDetails } from "@/services/evolution";

const useFetchEvolutions = (speciesId: number) => {
  const [evolutions, setEvolutions] = useState<Evolution[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvolutions = async () => {
      try {
        if (!isLoading) {
          setIsLoading(true);

          const evolutions = await getPokemonEvolutionDetails(speciesId);
          if (evolutions) setEvolutions(evolutions);

          setIsLoading(false);
        }
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchEvolutions();
  }, [speciesId]);

  return { evolutions, isLoading, error };
};

export default useFetchEvolutions;
