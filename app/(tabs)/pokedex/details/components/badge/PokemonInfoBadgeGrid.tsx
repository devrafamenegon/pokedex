import { StyleSheet, View } from "react-native";
import PokemonInfoBadge from "./PokemonInfoBadge";
import { Pokemon } from "@/types/pokemon";
import { SpeciesResponseDto } from "@/services/pokemon";

interface PokemonInfoBadgeGridProps {
  pokemon: Pokemon;
  details: SpeciesResponseDto;
}

const PokemonInfoBadgeGrid: React.FC<PokemonInfoBadgeGridProps> = ({
  pokemon,
  details,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <PokemonInfoBadge
          label="peso"
          type="weight"
          value={
            pokemon?.weight ? (pokemon.weight / 10).toString() + " kg" : ""
          }
        />
      </View>
      <View style={styles.badge}>
        <PokemonInfoBadge
          label="altura"
          type="height"
          value={pokemon?.height ? (pokemon.height / 10).toString() + " m" : ""}
        />
      </View>
      <View style={styles.badge}>
        <PokemonInfoBadge
          label="categoria"
          type="category"
          value={details?.genus ?? "N/A"}
        />
      </View>
      <View style={styles.badge}>
        <PokemonInfoBadge
          label="habilidade"
          type="hability"
          value={
            pokemon?.abilities.map((abilities) => abilities.ability.name) ??
            "N/A"
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 60,
  },
  badge: {
    width: "48%",
    height: 64,
    marginBottom: 20,
  },
});

export default PokemonInfoBadgeGrid;
