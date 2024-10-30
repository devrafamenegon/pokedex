import { Evolution } from "@/types/pokemon";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DownArrowIcon from "@/components/icon/down-arrow";
import EvolutionCard from "./EvolutionCard";
import { useRouter } from "expo-router";

interface EvolutionChainProps {
  evolutions: Evolution[];
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolutions }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {evolutions.map((evo: Evolution, index: number) => (
        <View key={index}>
          {evo.condition?.trigger && (
            <View style={styles.conditionContainer}>
              <DownArrowIcon />
              <Text style={styles.conditionText}>
                {evo.condition?.trigger.replace("-", " ")}{" "}
                {evo.condition?.min_level}
              </Text>
            </View>
          )}
          <Pressable onPress={() => router.push(`/details/${evo.id}`)}>
            <EvolutionCard
              id={evo.id ?? 0}
              name={evo.name ?? "Não encontrado"}
              types={evo.types ?? []}
            />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  conditionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  conditionText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#173EA5",
    textTransform: "capitalize",
  },
});

export default EvolutionChain;
