import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import PokemonCard from '@/components/PokemonCard';
import { Pokemon } from '@/types/pokemon';

const HomeScreen = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of Pokémons from the PokéAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(async data => {
        const detailedPokemonList = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name: details.name,
              types: details.types.map((typeInfo: any) => typeInfo.type.name),
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`
            };
          })
        );
        setPokemonList(detailedPokemonList); // Store the detailed Pokémon data in state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching Pokémons:', error);
        setLoading(false);
      });
  }, []);

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard pokemon={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Procurar Pokémon..."
          cursorColor="#000"
          style={styles.searchBar}
        />
      </View>

      <View style={styles.filterContainer}>
        <Pressable style={styles.filterButton}>
          <Text style={styles.filterButtonText}>
            Todos os tipos
            <Ionicons name="chevron-down" size={16} style={styles.icon} />
          </Text>
        </Pressable>

        <Pressable style={styles.filterButton}>
          <Text style={styles.filterButtonText}>
            Menor número
            <Ionicons name="chevron-down" size={16} style={styles.icon} />
          </Text>
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={pokemonList}
            renderItem={renderPokemonItem}
            keyExtractor={(item: Pokemon) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
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
    marginTop: 10,
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
    alignItems: 'center'
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  icon: {
    marginLeft: 4,
    lineHeight: 18,
  }
});

export default HomeScreen;
