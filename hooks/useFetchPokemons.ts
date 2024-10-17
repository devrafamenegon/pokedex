import { useState, useEffect } from "react";
import { Pokemon } from "@/types/pokemon";
import { fetchAllPokemons } from "@/services/pokemon";
import { getLimit } from "@/utils/limit";

const useFetchPokemons = () => {
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [error, setError] = useState<string | null>(null);

  const limit = getLimit();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        if (!isLoading) {
          setIsLoading(true);
          const pokemonList = await fetchAllPokemons(page, order, limit);
          setAllPokemonList((prevList) =>
            order === "asc"
              ? [...prevList, ...pokemonList]
              : [...pokemonList, ...prevList]
          );

          setIsLoading(false);
        }
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [page]);

  useEffect(() => {
    setAllPokemonList([]);
    setPage(0);
  }, [order]);

  const loadMorePokemons = () => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const clearList = () => {
    setAllPokemonList([]);
  };

  return {
    allPokemonList,
    isLoading,
    setOrder,
    clearList,
    loadMorePokemons,
    error,
  };
};

export default useFetchPokemons;
