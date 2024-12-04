import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pokemon } from "../types/pokemon";
import { orderPokemonList } from "@/utils/order";
import { Order } from "@/enums/order";

interface FavoritesContextType {
  favorites: Pokemon[];
  isLoading: boolean;
  addFavorite: (pokemon: Pokemon) => Promise<void>;
  removeFavorite: (pokemonId: number) => Promise<void>;
  toggleFavorite: (pokemon: Pokemon) => Promise<void>;
  isFavorite: (pokemonId: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const STORAGE_KEY = "favorites";

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      setIsLoading(true);
      const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedFavorites) {
        const parsedFavorites: Pokemon[] = JSON.parse(storedFavorites);
        const orderderFavorites = orderPokemonList(
          parsedFavorites,
          Order.NUMERICAL_ASC
        );
        setFavorites(orderderFavorites);
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async (updatedFavorites: Pokemon[]) => {
    try {
      setIsLoading(true);
      const orderedFavorites = orderPokemonList(
        updatedFavorites,
        Order.NUMERICAL_ASC
      );
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(orderedFavorites));
      setFavorites(orderedFavorites);
    } catch (error) {
      console.error("Error saving favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addFavorite = async (pokemon: Pokemon) => {
    if (!isFavorite(pokemon.id)) {
      const updatedFavorites = [...favorites, pokemon];
      await saveFavorites(updatedFavorites);
    }
  };

  const removeFavorite = async (pokemonId: number) => {
    const updatedFavorites = favorites.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    await saveFavorites(updatedFavorites);
  };

  const toggleFavorite = async (pokemon: Pokemon) => {
    if (isFavorite(pokemon.id)) {
      await removeFavorite(pokemon.id);
    } else {
      await addFavorite(pokemon);
    }
  };

  const isFavorite = (pokemonId: number): boolean => {
    return favorites.some((pokemon) => pokemon.id === pokemonId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  }
  return context;
};
