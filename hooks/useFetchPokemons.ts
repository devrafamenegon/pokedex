import { useState, useEffect } from "react";
import { Pokemon } from "@/types/pokemon";
import { fetchAllPokemons } from "@/services/pokemon";
import { getLimit } from "@/utils/limit";
import { Order } from "@/enums/order";

const useFetchPokemons = () => {
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<Order>(Order.NUMERICAL_ASC);
  const [error, setError] = useState<string | null>(null);

  const limit = getLimit();

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);

      try {
        const pokemonList = await fetchAllPokemons(limit);
        setAllPokemonList(pokemonList);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return {
    allPokemonList,
    isLoading,
    setOrder,
    order,
    error,
  };
};

export default useFetchPokemons;
