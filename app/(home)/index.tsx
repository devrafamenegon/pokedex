import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Pokemon } from "@/types/pokemon";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { types } from "@/utils/types/colors";
import OrderBottomSheet from "@/components/bottom-sheet/OrderBottomSheet";
import TypeBottomSheet from "@/components/bottom-sheet/TypeBottomSheet";
import useFetchPokemons from "@/hooks/useFetchPokemons";
import FilterButton from "@/components/FilterButton";
import { orderPokemonList } from "@/utils/order";
import PokemonList from "@/components/PokemonList";
import { filterPokemonList } from "@/utils/filter";

const HomeScreen = () => {
  const { allPokemonList, loading } = useFetchPokemons();

  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>("Todos os tipos");
  const [selectedOrder, setSelectedOrder] = useState<string>("Menor número");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const typeSheetRef = useRef<BottomSheetModal>(null);
  const orderSheetRef = useRef<BottomSheetModal>(null);

  const handleTypeFilterPress = () => typeSheetRef.current?.expand();
  const handleOrderFilterPress = () => orderSheetRef.current?.expand();

  useEffect(() => {
    const filteredList = filterPokemonList(
      allPokemonList,
      selectedType,
      searchQuery
    );
    const orderedList = orderPokemonList(filteredList, selectedOrder);

    setFilteredPokemonList(orderedList);
  }, [allPokemonList, selectedType, selectedOrder, searchQuery]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        {/* Barra de busca */}
        <TextInput
          placeholder="Procurar Pokémon..."
          cursorColor="#000"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Botões de filtro */}
        <View style={styles.filterContainer}>
          <FilterButton
            variant="type"
            text={selectedType}
            onPress={handleTypeFilterPress}
          />

          <FilterButton
            variant="order"
            text={selectedOrder}
            onPress={handleOrderFilterPress}
          />
        </View>

        {/* Pokemon list */}
        <View style={styles.listContainer}>
          <PokemonList loading={loading} data={filteredPokemonList} />
        </View>
      </SafeAreaView>

      <TypeBottomSheet
        ref={typeSheetRef}
        sortedTypes={types.sort()}
        setSelectedType={setSelectedType}
      />

      <OrderBottomSheet
        ref={orderSheetRef}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingHorizontal: 16,
    flex: 1,
  },
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: "#ccc",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    gap: 16,
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
});

export default HomeScreen;
