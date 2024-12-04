import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import { Pokemon } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import FavoriteCircleIcon from "@/components/icon/favorite-circle";
import { useFavorites } from "@/contexts/favorites";

interface PokemonListProps {
  isLoading: boolean;
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ isLoading, data }) => {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  const renderPokemonItem = useCallback(
    ({ item }: { item: Pokemon }) => (
      <Pressable
        onPress={() => {
          router.push(`/(tabs)/pokedex/details/${item.id}`);
        }}
      >
        <Pressable
          style={styles.favoriteContainer}
          onPress={() => {
            toggleFavorite(item);
          }}
        >
          <FavoriteCircleIcon isFavorited={isFavorite(item.id)} />
        </Pressable>
        <PokemonCard key={item.id} pokemon={item} />
      </Pressable>
    ),
    [router, toggleFavorite]
  );

  const listFooterComponent = useCallback(() => {
    return (
      <FlatList
        data={[]}
        renderItem={() => <PokemonCardSkeleton />}
        keyExtractor={(item: Pokemon, index) =>
          item?.id?.toString() || index.toString()
        }
        showsVerticalScrollIndicator={false}
      />
    );
  }, []);

  const listEmptyComponent = useCallback(
    () => <Text style={styles.emptyText}>Nenhum Pokémon encontrado.</Text>,
    []
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderPokemonItem}
        keyExtractor={(item: Pokemon) => item?.id?.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        ListEmptyComponent={!isLoading ? listEmptyComponent : null}
        ListFooterComponent={isLoading ? listFooterComponent : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#555",
    fontFamily: "Poppins-Regular",
  },
  loadingMoreContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  favoriteContainer: {
    position: "absolute",
    right: 6,
    top: 12,
    zIndex: 10,
  },
});

export default React.memo(PokemonList);
