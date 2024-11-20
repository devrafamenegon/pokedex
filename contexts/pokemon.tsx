import React, { createContext, useContext, ReactNode } from "react";
import { Pokemon } from "@/types/pokemon";
import useFetchPokemons from "@/hooks/useFetchPokemons";
import { Order } from "@/enums/order";

interface PokemonContextData {
  allPokemonList: Pokemon[];
  isLoading: boolean;
  order: Order;
  setOrder: (order: Order) => void;
  error: string | null;
}

const PokemonContext = createContext<PokemonContextData | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const { allPokemonList, order, setOrder, isLoading, error } =
    useFetchPokemons();

  return (
    <PokemonContext.Provider
      value={{
        allPokemonList,
        isLoading,
        order,
        setOrder,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
