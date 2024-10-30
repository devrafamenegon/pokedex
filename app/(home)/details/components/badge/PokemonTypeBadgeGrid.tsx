import PokemonTypeBadge from "@/components/badge/PokemonTypeBadge";
import { PokemonType } from "@/types/pokemon";
import { StyleSheet, View } from "react-native";

interface PokemonTypeBadgeGridProps {
  types: PokemonType[];
}

const PokemonTypeBadgeGrid: React.FC<PokemonTypeBadgeGridProps> = ({
  types,
}) => {
  return (
    <View style={styles.pokemonDamageBadgeContainer}>
      {types.map((type, index) => (
        <View style={styles.pokemonDamageBadge} key={index}>
          <PokemonTypeBadge type={type} isFlexible />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonDamageBadgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 20,
  },
  pokemonDamageBadge: {
    width: "48%",
    marginBottom: 12,
  },
});

export default PokemonTypeBadgeGrid;
