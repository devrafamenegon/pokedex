import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import { Pokemon } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";

interface PokemonListProps {
  isLoading: boolean;
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ isLoading, data }) => {
  const router = useRouter();

  const renderPokemonItem = useCallback(
    ({ item }: { item: Pokemon }) => (
      <Pressable
        onPress={() => {
          console.log(`/details/${item.id}`);
          router.push(`/(tabs)/pokedex/details/${item.id}`);
        }}
      >
        <PokemonCard key={item.id} pokemon={item} />
      </Pressable>
    ),
    [router]
  );

  const listFooterComponent = useCallback(() => {
    return (
      <FlatList
        data={Array.from({ length: 10 })}
        renderItem={() => <PokemonCardSkeleton />}
        keyExtractor={(_, index) => index.toString()}
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
        keyExtractor={(item: Pokemon) => item.id.toString()}
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
});

export default React.memo(PokemonList);
