// PokemonContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { Pokemon } from "@/types/pokemon";
import useFetchPokemons from "@/hooks/useFetchPokemons";

// Tipagem do contexto
interface PokemonContextData {
  allPokemonList: Pokemon[];
  isLoading: boolean;
  setOrder: (order: "asc" | "desc") => void;
  loadMorePokemons: () => void;
  clearList: () => void;
  error: string | null;
}

// Criando o contexto
const PokemonContext = createContext<PokemonContextData | undefined>(undefined);

// Provider para encapsular a aplicação
export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  // Usando o hook aqui
  const {
    allPokemonList,
    isLoading,
    setOrder,
    clearList,
    loadMorePokemons,
    error,
  } = useFetchPokemons();

  return (
    <PokemonContext.Provider
      value={{
        allPokemonList,
        isLoading,
        setOrder,
        loadMorePokemons,
        clearList,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// Custom hook para acessar o contexto
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
