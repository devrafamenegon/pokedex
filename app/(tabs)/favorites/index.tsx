import { View, Text, StyleSheet, Image } from "react-native";
import PokemonList from "../pokedex/components/PokemonList";
import { useFavorites } from "@/contexts/favorites";
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";
import MagikarpIcon from "@/components/icon/magikarp";

export default function FavoritesScreen() {
  const { favorites, isLoading } = useFavorites();

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (!isLoading) setPokemonList(favorites);
  }, [favorites, isLoading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      {!isLoading && pokemonList.length ? (
        <View style={styles.listContainer}>
          <PokemonList isLoading={isLoading} data={pokemonList} />
        </View>
      ) : (
        <View style={styles.emptyListContainer}>
          <MagikarpIcon />
          <Text style={styles.strongText}>
            Você não favoritou nenhum Pokémon :(
          </Text>
          <Text style={styles.descriptionText}>
            Clique no ícone de coração dos seus pokémons favoritos e eles
            aparecerão aqui.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  listContainer: {
    marginTop: 16,
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  strongText: {
    marginTop: 16,
    color: "#333",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  descriptionText: {
    marginTop: 8,
    color: "#333",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});
