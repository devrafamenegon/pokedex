import { PokemonType } from "@/types/pokemon";
import { capitalizeFirstLetter } from "@/utils/string";
import { getTextColor, getTypeColor } from "@/utils/types/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

interface FilterButtonProps {
  variant: "type" | "order";
  text: string;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  variant,
  text,
  onPress,
}) => {
  const isTypeVariant = variant === "type";
  const isAllTypes = text === "Todos os tipos";

  const backgroundColor = isTypeVariant
    ? isAllTypes
      ? "#333"
      : getTypeColor(text.toLowerCase() as PokemonType)
    : "#333";

  const textColor = isTypeVariant
    ? isAllTypes
      ? "#fff"
      : getTextColor(backgroundColor)
    : "#fff";

  return (
    <Pressable
      style={[styles.filterButton, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.filterButtonText, { color: textColor }]}>
        {capitalizeFirstLetter(text)}
      </Text>
      <Ionicons
        name="chevron-down"
        size={16}
        style={styles.icon}
        color={textColor}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 54,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  filterButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    marginRight: 8,
  },
  icon: {
    position: "absolute",
    right: 16,
  },
});

export default FilterButton;
