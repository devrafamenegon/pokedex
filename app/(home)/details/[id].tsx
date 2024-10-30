import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import useFetchEvolutions from "@/hooks/useFetchEvolutions";
import useFetchPokemonDetails from "@/hooks/useFetchPokemonDetails";
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetails";
import PokemonDamageClassifier from "./components/PokemonDamageClassifier";
import PokemonInfoBadgeGrid from "./components/badge/PokemonInfoBadgeGrid";
import GenderBar from "./components/gender/GenderBar";
import EvolutionChain from "./components/evolution/EvolutionChain";
import PokemonImage from "../components/PokemonImage";
import PokemonImageBackground from "./components/PokemonImageBackground";

const DetailsScreen = () => {
  const { dismiss } = useRouter();
  const { id } = useLocalSearchParams();
  const pokemonId = Array.isArray(id) ? Number(id[0]) : Number(id);

  const { evolutions, isLoadingEvolutions, error } =
    useFetchEvolutions(pokemonId);
  const { isLoadingDetails, pokemon, damageRelations, speciesDetails } =
    useFetchPokemonDetails(pokemonId);

  const handleBack = () => dismiss();
  const handleFavorite = () => {
    // TODO
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onBack={handleBack} onFavorite={handleFavorite} />
      </View>

      <View style={styles.imageContainer}>
        <PokemonImage id={id.toString()} maxSize={250} />
      </View>

      <View style={styles.content}>
        {isLoadingDetails ? (
          <Text>Carregando detalhes...</Text>
        ) : (
          <View>
            <PokemonDetails pokemon={pokemon!} details={speciesDetails!} />
            <View style={styles.divider} />
            <PokemonInfoBadgeGrid
              pokemon={pokemon!}
              details={speciesDetails!}
            />
            <GenderBar rate={speciesDetails?.gender_rate ?? 0} />

            <View style={styles.damageSection}>
              <PokemonDamageClassifier
                label="Fraco contra:"
                damageRelation={damageRelations?.double_damage_from ?? []}
              />

              <PokemonDamageClassifier
                label="Forte contra:"
                damageRelation={damageRelations?.double_damage_to ?? []}
              />
            </View>

            <View style={styles.evolutionContainer}>
              <Text style={styles.evolutionText}>Evoluções</Text>
              <View style={styles.evolutionCard}>
                {isLoadingEvolutions ? (
                  <Text>Carregando evoluções...</Text>
                ) : error ? (
                  <Text>Erro ao carregar evoluções.</Text>
                ) : (
                  <EvolutionChain evolutions={evolutions} />
                )}
              </View>
            </View>
          </View>
        )}
      </View>

      {pokemon ? <PokemonImageBackground pokemon={pokemon} /> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
    zIndex: 100,
  },
  headerContainer: {
    marginTop: 50,
  },
  imageContainer: {
    height: 300,
    justifyContent: "flex-end",
    zIndex: 101,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  divider: {
    flex: 1,
    height: 4,
    backgroundColor: "#000",
    opacity: 0.05,
    marginTop: 20,
  },
  damageSection: {
    marginTop: 40,
  },
  evolutionContainer: {
    flex: 1,
  },
  evolutionText: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#000",
    lineHeight: 24,
  },
  evolutionCard: {
    flex: 1,
    marginTop: 8,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 15,
    gap: 8,
  },
});

export default DetailsScreen;
