import React from "react";
import { View, StyleSheet } from "react-native";
import { PokemonType } from "@/types/pokemon";
import { getTypeColor } from "@/utils/types/colors";
import { getTypeFlatIcon } from "@/utils/types/flat";

const PokemonTypeIcon: React.FC<{
  type: PokemonType;
  isBorderless?: boolean;
}> = ({ type, isBorderless = false }) => {
  const color = getTypeColor(type);
  const Icon = getTypeFlatIcon(type);

  return (
    <View
      style={[
        styles.iconContainer,
        { backgroundColor: isBorderless ? "transparent" : "#fff" },
      ]}
    >
      <Icon fill={isBorderless ? "#fff" : color} width={13} height={13} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonTypeIcon;
