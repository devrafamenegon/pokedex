import { PokemonType } from "@/types/pokemon";
import { getTextColor, getTypeColor } from "@/utils/types/colors";
import { StyleSheet, Text, View } from "react-native";
import PokemonTypeIcon from "./PokemonTypeIcon";

interface DamageRelationProps {
  type: PokemonType;
  isFlexible?: boolean;
  hasText?: boolean;
  height?: number;
  isBorderless?: boolean;
}

const PokemonTypeBadge: React.FC<DamageRelationProps> = ({
  type,
  isFlexible = false,
  hasText = true,
  height = 28,
  isBorderless = false,
}) => {
  const backgroundColor = getTypeColor(type);
  const textColor = getTextColor(backgroundColor);

  return (
    <View style={isFlexible && { flex: 1 }}>
      <View style={[styles.badge, { backgroundColor, height }]}>
        <PokemonTypeIcon type={type} isBorderless={isBorderless} />
        {hasText ? (
          <Text style={[styles.text, { color: textColor }]}>{type}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 48,
    paddingHorizontal: 8,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    marginLeft: 4,
    textTransform: "capitalize",
    lineHeight: 20,
  },
});

export default PokemonTypeBadge;
