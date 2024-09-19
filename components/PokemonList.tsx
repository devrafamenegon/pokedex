import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import { Pokemon } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";
import { useRouter } from "expo-router";

interface PokemonListProps {
  loading: boolean;
  data: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ loading, data }) => {
  const router = useRouter();

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <Pressable onPress={() => router.push(`/details/${item.id}`)}>
      <PokemonCard key={item.id} pokemon={item} />
    </Pressable>
  );

  return (
    <View>
      {loading ? (
        <FlatList
          data={Array.from({ length: 20 })}
          renderItem={() => <PokemonCardSkeleton />}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderPokemonItem}
          keyExtractor={(item: Pokemon) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum Pokémon encontrado.</Text>
          }
        />
      )}
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
});

export default PokemonList;
