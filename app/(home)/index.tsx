import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PokemonCard from "@/components/PokemonCard";
import PokemonCardSkeleton from "@/components/PokemonCardSkeleton";
import {
  ConditionToEvolve,
  Evolution,
  Pokemon,
  PokemonType,
} from "@/types/pokemon";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getTextColor, getTypeColor, types } from "@/utils/types/colors";
import { capitalizeFirstLetter } from "@/utils/string";
import { Order } from "@/enums/order";
import { useRouter } from "expo-router";
import OrderBottomSheet from "@/components/bottom-sheet/OrderBottomSheet";
import TypeBottomSheet from "@/components/bottom-sheet/TypeBottomSheet";

const HomeScreen = () => {
  const router = useRouter();

  const handleDetails = (id: number) => {
    router.push(`/details/${id}` as any);
  };

  // Estados para armazenar dados e controlar a interface
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<string>("Todos os tipos");
  const [selectedOrder, setSelectedOrder] = useState<string>("Menor número");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Referências para os BottomSheets
  const typeSheetRef = useRef<BottomSheetModal>(null);
  const orderSheetRef = useRef<BottomSheetModal>(null);

  // Lista de tipos ordenados alfabeticamente
  const sortedTypes = useMemo(() => types.sort(), []);

  // Funções de manipulação dos filtros
  const handleTypeFilterPress = () => typeSheetRef.current?.expand();
  const handleOrderFilterPress = () => orderSheetRef.current?.expand();

  // Função recursiva para navegar pelas evoluções
  const extractEvolutions = async (chain: any): Promise<Evolution[]> => {
    let evolutions: Evolution[] = [];

    const processStage = async (currentStage: any) => {
      // Busque em /pokemon-species/ID
      const pokemonSpeciesRes = await fetch(currentStage.species.url);
      const { id } = await pokemonSpeciesRes.json();

      // Busque em /pokemon/ID
      const pokemonRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const { types } = await pokemonRes.json();

      // Mapeamento dos tipos de Pokémon
      const mappedTypes = types.map((typeInfo: any) => typeInfo.type.name);

      const evolutionDetails = currentStage.evolution_details[0];
      const conditionsToEvolve: ConditionToEvolve | null = evolutionDetails
        ? {
            min_level: evolutionDetails.min_level ?? null,
            trigger: evolutionDetails.trigger.name,
            item: evolutionDetails.item?.name ?? null,
            held_item: evolutionDetails.held_item?.name ?? null,
            min_affection: evolutionDetails.min_affection ?? null,
            min_beauty: evolutionDetails.min_beauty ?? null,
            min_happiness: evolutionDetails.min_happiness ?? null,
          }
        : null;

      const evolution: Evolution = {
        id: id,
        name: currentStage.species.name,
        types: mappedTypes,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        condition: conditionsToEvolve,
      };

      evolutions.push(evolution);

      for (const nextStage of currentStage.evolves_to) {
        await processStage(nextStage); // Aguarda o processamento da próxima evolução
      }
    };

    // Começa a processar a cadeia inicial
    await processStage(chain);

    return evolutions;
  };

  const getPokemonEvolutionDetails = async (
    speciesId: number
  ): Promise<Evolution[] | null> => {
    try {
      // Obtenha a URL da cadeia de evolução
      const speciesRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${speciesId}`
      );
      const { evolution_chain } = await speciesRes.json();

      // Faça o fetch da cadeia de evolução
      const evolutionChainRes = await fetch(evolution_chain.url);
      const { chain } = await evolutionChainRes.json();

      // Extraímos todas as evoluções da cadeia
      const evolutions = await extractEvolutions(chain);

      return evolutions;
    } catch (error) {
      console.error("Error fetching evolution details:", error);
      return null;
    }
  };

  const fetchAllPokemons = async () => {
    try {
      // Verifica se os dados já estão em cache
      const cachedPokemonList = await AsyncStorage.getItem("allPokemonList");
      if (cachedPokemonList) {
        const parsedList = JSON.parse(cachedPokemonList);
        setAllPokemonList(parsedList);
        setFilteredPokemonList(parsedList);

        return;
      }

      // Se não estiver em cache, busca todos os Pokémon da API
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10`
      );
      const data = await response.json();

      // Mapeia os resultados para obter detalhes de cada Pokémon
      const detailedPokemonList: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon: any) => {
          try {
            // Primeiro fetch para obter detalhes básicos do Pokémon
            const res1 = await fetch(pokemon.url);
            const { id, name, types, abilities, weight, height } =
              await res1.json();

            // Mapeamento dos tipos de Pokémon
            const mappedTypes = types.map(
              (typeInfo: any) => typeInfo.type.name
            );

            // Segundo fetch para obter mais detalhes do Pokémon (como taxa de captura, gênero, etc.)
            const res2 = await fetch(
              `https://pokeapi.co/api/v2/pokemon-species/${id}`
            );
            const { capture_rate, gender_rate, flavor_text_entries, genera } =
              await res2.json();

            // Fetch para obter os damage relations para cada tipo do Pokémon
            const damageRelationsPromises = mappedTypes.map(
              async (type: string) => {
                const res = await fetch(
                  `https://pokeapi.co/api/v2/type/${type}`
                );
                const { damage_relations } = await res.json();
                return {
                  double_damage_from: damage_relations.double_damage_from.map(
                    (damageFromInfo: any) => damageFromInfo.name
                  ),
                  double_damage_to: damage_relations.double_damage_to.map(
                    (damageToInfo: any) => damageToInfo.name
                  ),
                };
              }
            );

            // Aguarda todas as promessas de damage relations
            const damageRelations = await Promise.all(damageRelationsPromises);

            // Combina as relações de dano de todos os tipos
            const double_damage_from_list: PokemonType[] = [];
            const double_damage_to_list: PokemonType[] = [];

            damageRelations.forEach((relation) => {
              double_damage_from_list.push(...relation.double_damage_from);
              double_damage_to_list.push(...relation.double_damage_to);
            });

            const evolutions = await getPokemonEvolutionDetails(id);

            // Mapeamento final do Pokémon
            const mappedPokemon: Pokemon = {
              id: id,
              name: name,
              types: mappedTypes,
              abilities,
              weight,
              height,
              capture_rate,
              gender_rate,
              flavor_text: flavor_text_entries.find(
                (flavorTextInfo: any) => flavorTextInfo.language.name === "en"
              )?.flavor_text,
              genus: genera
                .find((generaInfo: any) => generaInfo.language.name === "en")
                ?.genus.replace("Pokémon", ""),
              double_damage_from: [...new Set(double_damage_from_list)], // Remove duplicatas
              double_damage_to: [...new Set(double_damage_to_list)], // Remove duplicatas
              evolution_chain: evolutions,
            };

            return mappedPokemon;
          } catch (error) {
            console.error(`Error fetching details for ${pokemon.name}:`, error);
            return null;
          }
        })
      );

      // Remove possíveis valores nulos resultantes de erros na busca de detalhes
      const filteredList = detailedPokemonList.filter(
        (pokemon) => pokemon !== null
      ) as Pokemon[];

      // Armazena os dados no estado e no cache
      setAllPokemonList(filteredList);
      setFilteredPokemonList(filteredList);
      await AsyncStorage.setItem(
        "allPokemonList",
        JSON.stringify(filteredList)
      );
    } catch (error) {
      console.error("Error fetching Pokémons:", error);
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
    if (selectedType !== "Todos os tipos") {
      updatedList = updatedList.filter((pokemon) =>
        pokemon.types.includes(selectedType.toLowerCase() as PokemonType)
      );
    }

    // Filtragem por busca
    if (searchQuery.trim() !== "") {
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
    <Pressable onPress={() => handleDetails(item.id)}>
      <PokemonCard key={item.id} pokemon={item} />
    </Pressable>
  );

  // Cores dinâmicas dos botões de filtro
  const typeBackgroundColor =
    selectedType === "Todos os tipos"
      ? "#333"
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
            style={[
              styles.filterButton,
              { backgroundColor: typeBackgroundColor },
            ]}
            onPress={handleTypeFilterPress}
          >
            <Text style={[styles.filterButtonText, { color: typeTextColor }]}>
              {capitalizeFirstLetter(selectedType)}
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              style={styles.icon}
              color={typeTextColor}
            />
          </Pressable>

          <Pressable
            style={styles.filterButton}
            onPress={handleOrderFilterPress}
          >
            <Text style={styles.filterButtonText}>
              {capitalizeFirstLetter(selectedOrder)}
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              style={styles.icon}
              color="#fff"
            />
          </Pressable>
        </View>

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
      </SafeAreaView>

      <TypeBottomSheet
        ref={typeSheetRef}
        sortedTypes={sortedTypes}
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
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#333",
    borderRadius: 54,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  filterButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    color: "#fff",
    marginRight: 8,
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#555",
    fontFamily: "Poppins-Regular",
  },
  typeButton: {
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 6,
    alignItems: "center",
  },
  typeButtonText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  bottomSheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomSheetHeader: {
    alignItems: "center",
    paddingVertical: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#333",
  },
  bottomSheetContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default HomeScreen;
