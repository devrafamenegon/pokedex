import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackArrowIcon from "@/components/icon/back-arrow";
import FavoriteIcon from "@/components/icon/favorite";
import PokemonInfoBadge from "@/components/PokemonInfoBadge";
import { Evolution, Pokemon } from "@/types/pokemon";
import { formatPokemonNumber } from "@/utils/string";
import { getTypeColor } from "@/utils/types/colors";
import TypeGradientIcon from "@/components/TypeGradientIcon";
import { LinearGradient } from "expo-linear-gradient";
import GenderBar from "@/components/GenderBar";
import PokemonTypeBadge from "@/components/PokemonTypeBadge";
import PokemonTypeBadgeGrid from "@/components/PokemonTypeBadgeGrid";
import EvolutionCard from "@/components/EvolutionCard";
import DownArrowIcon from "@/components/icon/down-arrow";
import useFetchEvolutions from "@/hooks/useFetchEvolutions";
import useFetchPokemonDetails from "@/hooks/useFetchPokemonDetails";
import { usePokemon } from "@/contexts/pokemon";

const DetailsScreen = () => {
  const { allPokemonList } = usePokemon();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);
  const [abilities, setAbilities] = useState<string[]>([]);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleBack = () => router.dismiss();
  const handleFavorite = () => {
    // TODO
  };

  const fetchSelectedPokemon = async () => {
    try {
      const pokemon = allPokemonList.find(
        (pokemon) => pokemon.id.toString() === id.toString()
      );

      console.log(allPokemonList);

      if (!pokemon) {
        throw new Error("Pokemon not found.");
      }

      setSelectedPokemon(pokemon);

      const abilitiesList = pokemon?.abilities.map((a) => a.ability.name);
      if (abilitiesList) setAbilities(abilitiesList);

      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
      Image.getSize(imageUrl, (width, height) => {
        setImageSize({ width, height });
      });
    } catch (error) {
      console.error("Error fetching Pokémons:", error);
      handleBack();
    }
  };

  const { evolutions, isLoading, error } = useFetchEvolutions(Number(id));

  useEffect(() => {
    fetchSelectedPokemon();

    if (selectedPokemon) {
      setSelectedPokemon(useFetchPokemonDetails(selectedPokemon));
    }
    setStatusBarHeight(StatusBar.currentHeight ? StatusBar.currentHeight : 30);
  }, [id]);

  return (
    <ScrollView style={[styles.container, {}]}>
      <View
        style={[
          styles.headerContainer,
          { marginTop: (statusBarHeight ?? 30) + 20, marginHorizontal: 16 },
        ]}
      >
        <Pressable style={styles.backArrow} onPress={handleBack}>
          <BackArrowIcon stroke={"#fff"} />
        </Pressable>
        <Pressable style={styles.favorite} onPress={handleFavorite}>
          <FavoriteIcon stroke={"#fff"} />
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        {imageSize.width > 0 && imageSize.height > 0 && (
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`,
            }}
            style={[
              styles.image,
              {
                width: imageSize.width * 3,
                height: imageSize.height * 3,
                maxWidth: 250,
                maxHeight: 250,
                resizeMode: "contain",
              },
            ]}
          />
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.pokemonName}>
          {selectedPokemon?.name ?? "Nome não disponível"}
        </Text>
        <Text style={styles.pokemonNumber}>
          {selectedPokemon?.id
            ? "Nª" + formatPokemonNumber(selectedPokemon?.id)
            : "ID não disponível"}
        </Text>
        <View style={styles.typeContainer}>
          {selectedPokemon?.types.map((type, index) => (
            <PokemonTypeBadge type={type} key={index} />
          ))}
        </View>
        <Text style={styles.pokemonBio}>
          {selectedPokemon?.flavor_text?.replaceAll("\n", " ")}
        </Text>

        <View style={styles.divider} />

        <View style={styles.pokemonInfoBadgeContainer}>
          <View style={styles.pokemonInfoBadge}>
            <PokemonInfoBadge
              label="peso"
              type="weight"
              value={
                selectedPokemon?.weight
                  ? (selectedPokemon.weight / 10).toString() + " kg"
                  : ""
              }
            />
          </View>
          <View style={styles.pokemonInfoBadge}>
            <PokemonInfoBadge
              label="altura"
              type="height"
              value={
                selectedPokemon?.height
                  ? (selectedPokemon.height / 10).toString() + " m"
                  : ""
              }
            />
          </View>
          <View style={styles.pokemonInfoBadge}>
            <PokemonInfoBadge
              label="categoria"
              type="category"
              value={selectedPokemon?.genus ?? "N/A"}
            />
          </View>
          <View style={styles.pokemonInfoBadge}>
            <PokemonInfoBadge
              label="habilidade"
              type="hability"
              value={abilities ?? "N/A"}
            />
          </View>
        </View>

        <GenderBar rate={selectedPokemon?.gender_rate ?? 0} />

        <View style={styles.damageSection}>
          <View style={styles.damageContainer}>
            <Text style={styles.damageText}>Fraco contra:</Text>
            <PokemonTypeBadgeGrid
              types={selectedPokemon?.double_damage_from ?? []}
            />
          </View>

          <View style={styles.damageContainer}>
            <Text style={styles.damageText}>Forte contra:</Text>
            <PokemonTypeBadgeGrid
              types={selectedPokemon?.double_damage_to ?? []}
            />
          </View>
        </View>

        <View style={styles.evolutionContainer}>
          <Text style={styles.evolutionText}>Evoluções</Text>
          <View style={styles.evolutionCard}>
            {isLoading ? (
              <Text>Carregando evoluções...</Text>
            ) : error ? (
              <Text>Erro ao carregar evoluções.</Text>
            ) : (
              evolutions?.map((evo: Evolution, index: number) => (
                <View key={index}>
                  {evo.condition?.trigger && (
                    <View style={styles.evolutionConditionContainer}>
                      <DownArrowIcon />
                      <Text style={styles.evolutionConditionText}>
                        {evo.condition?.trigger.replace("-", " ")}{" "}
                        {evo.condition?.min_level}
                      </Text>
                    </View>
                  )}
                  <EvolutionCard
                    id={evo?.id ?? 0}
                    name={evo?.name ?? "Não encontrado"}
                    types={evo?.types ?? []}
                  />
                </View>
              ))
            )}
          </View>
        </View>
      </View>

      {selectedPokemon ? (
        <LinearGradient
          colors={[
            getTypeColor(selectedPokemon?.types[0]),
            `${getTypeColor(selectedPokemon?.types[0])}80`,
          ]}
          start={{ x: 0.35, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.typeIconContainer}
        >
          <TypeGradientIcon type={selectedPokemon!.types[0]} size={204} />
        </LinearGradient>
      ) : null}
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
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 100,
  },
  backArrow: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 32,
    margin: -32,
  },
  favorite: {
    position: "absolute",
    top: 0,
    right: 16,
    padding: 32,
    margin: -32,
  },
  typeIconContainer: {
    height: 500,
    aspectRatio: 1,
    position: "absolute",
    borderRadius: 999,
    top: -150,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 32,
    zIndex: 1,
  },
  imageContainer: {
    height: 300,
    justifyContent: "flex-end",
    zIndex: 101,
  },
  image: {
    alignSelf: "center",
  },
  content: {
    marginTop: 26,
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  pokemonName: {
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    textTransform: "capitalize",
  },
  pokemonNumber: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#333",
    marginTop: -6,
    marginBottom: 4,
    lineHeight: 20,
  },
  typeContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
  typeBadge: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 48,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    alignItems: "center",
  },
  typeText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginLeft: 4,
    textTransform: "capitalize",
    lineHeight: 20,
  },
  pokemonBio: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#333",
    marginTop: 24,
  },
  divider: {
    flex: 1,
    height: 4,
    backgroundColor: "#000",
    opacity: 0.05,
    marginTop: 20,
  },
  pokemonInfoBadgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 20,
  },
  pokemonInfoBadge: {
    width: "48%",
    height: 64,
    marginBottom: 20,
  },
  damageSection: {
    marginTop: 40,
  },
  damageContainer: {
    flex: 1,
  },
  damageText: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#000",
    lineHeight: 24,
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
  evolutionConditionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  evolutionConditionText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#173EA5",
    textTransform: "capitalize",
  },
});

export default DetailsScreen;
