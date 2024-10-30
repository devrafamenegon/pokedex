import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import { Pokemon } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";
import { useRouter } from "expo-router";
import { getLimit } from "@/utils/limit";
import React, { useCallback } from "react";

interface PokemonListProps {
  isLoading: boolean;
  data: Pokemon[];
  onEndReached: () => void;
}

const PokemonList: React.FC<PokemonListProps> = ({
  isLoading,
  data,
  onEndReached,
}) => {
  const router = useRouter();
  const limit = getLimit();

  const renderPokemonItem = useCallback(
    ({ item }: { item: Pokemon }) => (
      <Pressable onPress={() => router.push(`/details/${item.id}`)}>
        <PokemonCard key={item.id} pokemon={item} />
      </Pressable>
    ),
    [router]
  );

  const listFooterComponent = useCallback(() => {
    return (
      <FlatList
        data={Array.from({ length: 2 })}
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
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        initialNumToRender={limit}
        maxToRenderPerBatch={limit}
        ListEmptyComponent={!isLoading ? listEmptyComponent : null}
        ListFooterComponent={listFooterComponent}
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
