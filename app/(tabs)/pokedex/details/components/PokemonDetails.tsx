import { View, Text, StyleSheet } from "react-native";
import { Pokemon } from "@/types/pokemon";
import { formatPokemonNumber } from "@/utils/string";
import PokemonTypeBadge from "@/components/badge/PokemonTypeBadge";
import { SpeciesResponseDto } from "@/services/pokemon";

type PokemonDetailsProps = {
  pokemon: Pokemon;
  details: SpeciesResponseDto;
};

const PokemonDetails = ({ pokemon, details }: PokemonDetailsProps) => (
  <View style={styles.content}>
    <Text style={styles.pokemonName}>
      {pokemon.name ?? "Nome não disponível"}
    </Text>
    <Text style={styles.pokemonNumber}>
      {pokemon.id
        ? "Nª" + formatPokemonNumber(pokemon.id)
        : "ID não disponível"}
    </Text>
    <View style={styles.typeContainer}>
      {pokemon.types.map((type, index) => (
        <PokemonTypeBadge type={type} key={index} />
      ))}
    </View>
    <Text style={styles.pokemonBio}>
      {details.flavor_text?.replaceAll("\n", " ")}
    </Text>
  </View>
);

const styles = StyleSheet.create({
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
  pokemonBio: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#333",
    marginTop: 24,
  },
});

export default PokemonDetails;
