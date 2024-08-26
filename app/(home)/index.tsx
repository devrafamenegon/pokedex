import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, Pressable, ActivityIndicator } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import PokemonCard from '@/components/PokemonCard';
import { Pokemon, PokemonType } from '@/types/pokemon';
import BottomSheet, { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getTextColor, getTypeColor, types } from '@/utils/types/colors';
import { capitalizeFirstLetter } from '@/utils/string';

const HomeScreen = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [selectedType, setSelectedType] = useState("Todos os tipos");

  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["30%", "60%"], []);

  const sortedTypes = useMemo(() => types.sort(), []);

  const handlePresentPress = () => sheetRef.current?.expand();

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    setPage(0);
    setPokemonList([]);
    sheetRef.current?.close();
  };

  const fetchPokemons = async (page: number, selectedType: string) => {
    const limit = 50;
    try {
      let fetchedPokemonList = [];

      if (selectedType === "Todos os tipos") {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`);
        const data = await response.json();
        fetchedPokemonList = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              types: details.types.map((typeInfo: any) => typeInfo.type.name),
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
            };
          })
        );
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType.toLowerCase()}`);
        const data = await response.json();
        const pokemonListByType = data.pokemon.slice(page * limit, (page + 1) * limit);
        fetchedPokemonList = await Promise.all(
          pokemonListByType.map(async (pokemonInfo: any) => {
            const res = await fetch(pokemonInfo.pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              types: details.types.map((typeInfo: any) => typeInfo.type.name),
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
            };
          })
        );
      }

      setPokemonList(prevList => [...prevList, ...fetchedPokemonList]);
    } catch (error) {
      console.error('Error fetching Pokémons:', error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchPokemons(page, selectedType);
  }, [page, selectedType]);

  const handleLoadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard pokemon={item} />
  );

  const renderFooter = () => {
    return isFetchingMore ? <ActivityIndicator size="large" color="#333" /> : null;
  };

  const renderTypeButton = useCallback(
    ({ item }: { item: string }) => {
      const backgroundColor = item === "Todos os tipos" ? "#333" : getTypeColor(item as PokemonType);
      const textColor = getTextColor(backgroundColor ?? '#666');
      
      return (
        <Pressable
          style={[styles.typeButton, { backgroundColor }]}
          onPress={() => handleTypeSelection(item)}
        >
          <Text style={[styles.typeButtonText, { color: textColor }]}>{capitalizeFirstLetter(item)}</Text>
        </Pressable>
      );
    },
    []
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            placeholder="Procurar Pokémon..."
            cursorColor="#000"
            style={styles.searchBar}
          />
        </View>

        <View style={styles.filterContainer}>
          <Pressable style={[styles.filterButton, { backgroundColor: selectedType === "Todos os tipos" ? '#333' : getTypeColor(selectedType as PokemonType) }]} onPress={handlePresentPress}>
            <Text style={styles.filterButtonText}>
              {capitalizeFirstLetter(selectedType)}
            </Text>
            <Ionicons name="chevron-down" size={16} style={styles.icon} color='#fff'/>
          </Pressable>

          <Pressable style={styles.filterButton}>
            <Text style={styles.filterButtonText}>
              Menor número
            </Text>
            <Ionicons name="chevron-down" size={16} style={styles.icon} color='#fff'/>
          </Pressable>
        </View>

        <View style={styles.listContainer}>
          {loading && page === 0 ? (
            <ActivityIndicator size="large" color="#333" />
          ) : (
            <FlatList
              data={pokemonList}
              renderItem={renderPokemonItem}
              keyExtractor={(item: Pokemon) => item.id.toString()}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderFooter}
            />
          )}
        </View>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose
        >
          <Text style={styles.bottomSheetTitle}>Selecione o tipo</Text>
          <BottomSheetFlatList
            data={["Todos os tipos", ...sortedTypes]}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={renderTypeButton}
            contentContainerStyle={styles.contentContainerBottomSheet}
          />
        </BottomSheet>
      </SafeAreaView>
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
    borderColor: '#ccc',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
    alignItems: 'center',
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  icon: {
    marginLeft: 4,
  },
  typeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  typeButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  contentContainerBottomSheet: {
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  bottomSheetTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginBottom: 32
  }
});

export default HomeScreen;
