import React, { useMemo, forwardRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getTextColor, getTypeColor } from "@/utils/types/colors";
import { PokemonType } from "@/types/pokemon";
import { capitalizeFirstLetter } from "@/utils/string";

interface OrderBottomSheetProps {
  sortedTypes: string[];
  setSelectedType: (type: string) => void;
}

const TypeBottomSheet = forwardRef<
  BottomSheetModalMethods,
  OrderBottomSheetProps
>(({ setSelectedType, sortedTypes }, ref) => {
  const typeSnapPoints = useMemo(() => ["30%", "60%"], []);

  const handleTypeSelection = (order: string) => {
    setSelectedType(order);
    (ref as React.RefObject<BottomSheetModalMethods>).current?.close();
  };

  // Renderização dos botões de tipo
  const renderTypeButton = ({ item }: { item: string }) => {
    const backgroundColor =
      item === "Todos os tipos" ? "#333" : getTypeColor(item as PokemonType);
    const textColor = getTextColor(backgroundColor ?? "#666");

    return (
      <Pressable
        style={[styles.typeButton, { backgroundColor }]}
        onPress={() => handleTypeSelection(item)}
      >
        <Text style={[styles.typeButtonText, { color: textColor }]}>
          {capitalizeFirstLetter(item)}
        </Text>
      </Pressable>
    );
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={typeSnapPoints}
      backgroundStyle={styles.bottomSheetBackground}
      index={-1}
      enablePanDownToClose
    >
      <View style={styles.bottomSheetHeader}>
        <Text style={styles.bottomSheetTitle}>Selecione o tipo</Text>
      </View>
      <BottomSheetFlatList
        data={["Todos os tipos", ...sortedTypes]}
        keyExtractor={(item) => item}
        renderItem={renderTypeButton}
        contentContainerStyle={styles.bottomSheetContent}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  typeButton: {
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 6,
    alignItems: "center",
  },
  typeButtonText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  bottomSheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomSheetHeader: {
    alignItems: "center",
    paddingVertical: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#333",
  },
  bottomSheetContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default TypeBottomSheet;
