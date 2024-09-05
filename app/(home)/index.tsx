import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PokemonCard from '@/components/PokemonCard';
import PokemonCardSkeleton from '@/components/PokemonCardSkeleton';
import { Pokemon, PokemonType } from '@/types/pokemon';
import BottomSheet, { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getTextColor, getTypeColor, types } from '@/utils/types/colors';
import { capitalizeFirstLetter } from '@/utils/string';
import { Order } from '@/enums/order';

const HomeScreen = () => {
  // Estados para armazenar dados e controlar a interface
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<string>('Todos os tipos');
  const [selectedOrder, setSelectedOrder] = useState<string>('Menor número');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Referências para os BottomSheets
  const typeSheetRef = useRef<BottomSheetModal>(null);
  const orderSheetRef = useRef<BottomSheetModal>(null);

  // Pontos de snap dos BottomSheets
  const typeSnapPoints = useMemo(() => ["30%", "60%"], []);
  const orderSnapPoints = useMemo(() => ["40%"], []);

  // Lista de tipos ordenados alfabeticamente
  const sortedTypes = useMemo(() => types.sort(), []);

  // Funções de manipulação dos filtros
  const handleTypeFilterPress = () => typeSheetRef.current?.expand();
  const handleOrderFilterPress = () => orderSheetRef.current?.expand();

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    typeSheetRef.current?.close();
  };

  const handleOrderSelection = (order: string) => {
    setSelectedOrder(order);
    orderSheetRef.current?.close();
  };

  const fetchAllPokemons = async () => {
    try {
      // Verifica se os dados já estão em cache
      const cachedPokemonList = await AsyncStorage.getItem('allPokemonList');
      if (cachedPokemonList) {
        const parsedList = JSON.parse(cachedPokemonList);
        setAllPokemonList(parsedList);
        setFilteredPokemonList(parsedList);
        return;
      }

      // Se não estiver em cache, busca todos os Pokémon da API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
      const data = await response.json();

      // Mapeia os resultados para obter detalhes de cada Pokémon
      const detailedPokemonList: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon: any) => {
          try {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              types: details.types.map((typeInfo: any) => typeInfo.type.name),
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
            };
          } catch (error) {
            console.error(`Error fetching details for ${pokemon.name}:`, error);
            return null;
          }
        })
      );

      // Remove possíveis valores nulos resultantes de erros na busca de detalhes
      const filteredList = detailedPokemonList.filter((pokemon) => pokemon !== null) as Pokemon[];

      // Armazena os dados no estado e no cache
      setAllPokemonList(filteredList);
      setFilteredPokemonList(filteredList);
      await AsyncStorage.setItem('allPokemonList', JSON.stringify(filteredList));
    } catch (error) {
      console.error('Error fetching Pokémons:', error);
    } finally {
      setLoading(false);
    }
  };

  // Efeito para carregar os Pokémon ao montar o componente
  useEffect(() => {
    fetchAllPokemons();
  }, []);

  // Efeito para filtrar e ordenar a lista sempre que os critérios mudarem
  useEffect(() => {
    let updatedList = [...allPokemonList];

    // Filtragem por tipo
    if (selectedType !== 'Todos os tipos') {
      updatedList = updatedList.filter((pokemon) =>
        pokemon.types.includes(selectedType.toLowerCase() as PokemonType)
      );
    }

    // Filtragem por busca
    if (searchQuery.trim() !== '') {
      updatedList = updatedList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Ordenação
    switch (selectedOrder) {
      case Order.NUMERICAL_ASC:
        updatedList.sort((a, b) => a.id - b.id);
        break;
      case Order.NUMERICAL_DESC:
        updatedList.sort((a, b) => b.id - a.id);
        break;
      case Order.ALPHABETICAL_ASC:
        updatedList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case Order.ALPHABETICAL_DESC:
        updatedList.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredPokemonList(updatedList);
  }, [allPokemonList, selectedType, selectedOrder, searchQuery]);

  // Renderização dos itens da lista de Pokémon
  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard key={item.id} pokemon={item} />
  );

  // Renderização dos botões de tipo
  const renderTypeButton = ({ item }: { item: string }) => {
    const backgroundColor =
      item === 'Todos os tipos' ? '#333' : getTypeColor(item as PokemonType);
    const textColor = getTextColor(backgroundColor ?? '#666');

    return (
      <Pressable
        style={[styles.typeButton, { backgroundColor }]}
        onPress={() => handleTypeSelection(item)}
      >
        <Text style={[styles.typeButtonText, { color: textColor }]}>
          {capitalizeFirstLetter(item)}
        </Text>
      </Pressable>
    );
  };

  // Renderização dos botões de ordenação
  const renderOrderButton = ({ item }: { item: string }) => {
    return (
      <Pressable
        style={[
          styles.orderButton,
          selectedOrder === item && styles.orderButtonSelected,
        ]}
        onPress={() => handleOrderSelection(item)}
      >
        <Text
          style={[
            styles.orderButtonText,
            selectedOrder === item && styles.orderButtonTextSelected,
          ]}
        >
          {item}
        </Text>
      </Pressable>
    );
  };

  // Cores dinâmicas dos botões de filtro
  const typeBackgroundColor =
    selectedType === 'Todos os tipos'
      ? '#333'
      : getTypeColor(selectedType.toLowerCase() as PokemonType);
  const typeTextColor = getTextColor(typeBackgroundColor);

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
          <Pressable
            style={[styles.filterButton, { backgroundColor: typeBackgroundColor }]}
            onPress={handleTypeFilterPress}
          >
            <Text style={[styles.filterButtonText, { color: typeTextColor }]}>
              {capitalizeFirstLetter(selectedType)}
            </Text>
            <Ionicons name="chevron-down" size={16} style={styles.icon} color={typeTextColor} />
          </Pressable>

          <Pressable style={styles.filterButton} onPress={handleOrderFilterPress}>
            <Text style={styles.filterButtonText}>
              {capitalizeFirstLetter(selectedOrder)}
            </Text>
            <Ionicons name="chevron-down" size={16} style={styles.icon} color="#fff" />
          </Pressable>
        </View>

        {/* Lista de Pokémon */}
        <View style={styles.listContainer}>
          {loading ? (
            // Skeleton Loader enquanto carrega os dados
            <FlatList
              data={Array.from({ length: 20 })}
              renderItem={() => <PokemonCardSkeleton />}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <FlatList
              data={filteredPokemonList}
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

        {/* BottomSheet de tipos */}
        <BottomSheet
            ref={typeSheetRef}
            snapPoints={typeSnapPoints}
            backgroundStyle={styles.bottomSheetBackground}
            index={-1}
            enablePanDownToClose>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.bottomSheetTitle}>Selecione o tipo</Text>
            </View>
            <BottomSheetFlatList
              data={['Todos os tipos', ...sortedTypes]}
              keyExtractor={(item) => item}
              renderItem={renderTypeButton}
              contentContainerStyle={styles.bottomSheetContent}
              showsVerticalScrollIndicator={false}
            />
        </BottomSheet>

        {/* BottomSheet de ordenação */}
        <BottomSheet
            ref={orderSheetRef}
            snapPoints={orderSnapPoints}
            backgroundStyle={styles.bottomSheetBackground}
            index={-1}
            enablePanDownToClose
          >
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.bottomSheetTitle}>Selecione a ordem</Text>
            </View>
            <BottomSheetFlatList
              data={['Menor número', 'Maior número', 'A-Z', 'Z-A']}
              keyExtractor={(item) => item}
              renderItem={renderOrderButton}
              contentContainerStyle={styles.bottomSheetContent}
              showsVerticalScrollIndicator={false}
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
    gap: 16
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 54,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  filterButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#fff',
    marginRight: 8,
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 16
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  typeButton: {
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 6,
    alignItems: 'center',
  },
  typeButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  orderButton: {
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 6,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  orderButtonSelected: {
    backgroundColor: '#333',
  },
  orderButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  orderButtonTextSelected: {
    color: '#fff',
  },
  bottomSheetBackground: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomSheetHeader: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  bottomSheetContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default HomeScreen;
