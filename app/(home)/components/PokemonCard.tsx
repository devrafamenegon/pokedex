import { Pokemon } from "@/types/pokemon";
import { getTypeColor } from "@/utils/types/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTypeGradientIcon } from "@/utils/types/gradient";
import { formatPokemonNumber } from "@/utils/string";
import PokemonTypeBadge from "@/components/badge/PokemonTypeBadge";
import PokemonImage from "./PokemonImage";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, types } = pokemon;
  const IconComponent = getTypeGradientIcon(types[0]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `${getTypeColor(types[0])}15` },
      ]}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.number}>Nº{formatPokemonNumber(id)}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.typeContainer}>
          {types.map((type, index) => (
            <PokemonTypeBadge type={type} key={index} />
          ))}
        </View>
      </View>
      <View
        style={[
          styles.imageContainer,
          { backgroundColor: getTypeColor(types[0]) },
        ]}
      >
        <IconComponent style={styles.imageBackgroundIcon} />
        <View style={styles.pokemonImageContainer}>
          <PokemonImage id={id.toString()} maxSize={75} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  infoContainer: {
    flex: 4 / 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  number: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  typeBadge: {
    display: "flex",
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
    fontSize: 11,
    marginLeft: 4,
    textTransform: "capitalize",
    lineHeight: 15,
  },
  imageContainer: {
    flex: 2 / 6,
    height: 100,
    justifyContent: "center",
    borderRadius: 15,
  },
  pokemonImageContainer: {
    alignSelf: "center",
  },
  imageBackgroundIcon: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default PokemonCard;
