import { getTypeColor } from "@/utils/types/colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Pokemon } from "@/types/pokemon";
import TypeGradientIcon from "./TypeGradientIcon";

type PokemonImageBackgroundProps = {
  pokemon: Pokemon;
};

const PokemonImageBackground = ({ pokemon }: PokemonImageBackgroundProps) => {
  return (
    <LinearGradient
      colors={[
        getTypeColor(pokemon?.types[0]),
        `${getTypeColor(pokemon?.types[0])}80`,
      ]}
      start={{ x: 0.35, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.typeIconContainer}
    >
      <TypeGradientIcon type={pokemon!.types[0]} size={204} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
});

export default PokemonImageBackground;
