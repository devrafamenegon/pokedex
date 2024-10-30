import { StyleSheet, Text, View } from "react-native";
import { PokemonType } from "@/types/pokemon";
import PokemonTypeBadgeGrid from "./badge/PokemonTypeBadgeGrid";

interface PokemonDamageClassifierProps {
  label: string;
  damageRelation: PokemonType[];
}

const PokemonDamageClassifier: React.FC<PokemonDamageClassifierProps> = ({
  label,
  damageRelation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <PokemonTypeBadgeGrid types={damageRelation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "#000",
    lineHeight: 24,
  },
});

export default PokemonDamageClassifier;
