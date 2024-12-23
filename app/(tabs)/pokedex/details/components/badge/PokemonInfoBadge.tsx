import { StyleSheet, Text, View } from "react-native";
import { capitalizeFirstLetter } from "@/utils/string";
import WeightIcon from "@/components/icon/weight";
import HeightIcon from "@/components/icon/height";
import CategoryIcon from "@/components/icon/category";
import HabilityIcon from "@/components/icon/hability";

interface PokemonInfoBadgeProps {
  label: string;
  value: string | string[];
  type: "weight" | "height" | "category" | "hability";
}

const iconMap: { [key: string]: React.ReactNode } = {
  weight: <WeightIcon />,
  height: <HeightIcon />,
  category: <CategoryIcon />,
  hability: <HabilityIcon />,
};

const PokemonInfoBadge: React.FC<PokemonInfoBadgeProps> = ({
  label,
  value,
  type,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {iconMap[type]}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        {typeof value === "string" ? (
          <Text style={styles.value}>{capitalizeFirstLetter(value)}</Text>
        ) : (
          value.map((v, index) => (
            <Text style={styles.value} key={index}>
              {capitalizeFirstLetter(v)}
            </Text>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 6,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textTransform: "uppercase",
  },
  valueContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#e6e6e6",
  },
  value: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    textAlign: "center",
  },
});

export default PokemonInfoBadge;
