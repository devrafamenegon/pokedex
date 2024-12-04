import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Pokemon } from "@/types/pokemon";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { types } from "@/utils/types/colors";
import OrderBottomSheet from "@/components/bottom-sheet/OrderBottomSheet";
import TypeBottomSheet from "@/components/bottom-sheet/TypeBottomSheet";
import { orderPokemonList } from "@/utils/order";
import { filterPokemonList } from "@/utils/filter";
import { usePokemon } from "@/contexts/pokemon";
import FilterButton from "@/components/button/FilterButton";
import PokemonList from "./components/PokemonList";

const HomeScreen = () => {
  const { allPokemonList, isLoading, order } = usePokemon();

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>("Todos os tipos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const typeSheetRef = useRef<BottomSheetModal>(null);
  const orderSheetRef = useRef<BottomSheetModal>(null);

  const handleTypeFilterPress = () => {
    orderSheetRef.current?.close();
    typeSheetRef.current?.expand();
  };
  const handleOrderFilterPress = () => {
    typeSheetRef.current?.close();
    orderSheetRef.current?.expand();
  };

  useEffect(() => {
    let filteredList: Pokemon[] = filterPokemonList(
      allPokemonList,
      selectedType,
      searchQuery
    );

    const orderedList: Pokemon[] = orderPokemonList(filteredList, order);

    setPokemonList(orderedList);
  }, [allPokemonList, selectedType, order, searchQuery]);

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
            text={order}
            onPress={handleOrderFilterPress}
          />
        </View>

        {/* Pokemon list */}
        <View style={styles.listContainer}>
          <PokemonList key={order} isLoading={isLoading} data={pokemonList} />
        </View>
      </SafeAreaView>

      <TypeBottomSheet
        ref={typeSheetRef}
        sortedTypes={types.sort()}
        setSelectedType={setSelectedType}
      />

      <OrderBottomSheet ref={orderSheetRef} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 56,
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
