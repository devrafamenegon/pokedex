import React, { useMemo, forwardRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Order } from "@/enums/order";
import { usePokemon } from "@/contexts/pokemon";

const OrderBottomSheet = forwardRef<BottomSheetModalMethods>(({}, ref) => {
  const orderSnapPoints = useMemo(() => ["60%"], []);
  const { setOrder, order } = usePokemon();

  const handleOrderSelection = (newOrder: Order) => {
    setOrder(newOrder);
    (ref as React.RefObject<BottomSheetModalMethods>).current?.close();
  };

  // Renderização dos botões de ordenação
  const renderOrderButton = ({ item }: { item: Order }) => {
    return (
      <Pressable
        style={[
          styles.orderButton,
          order === item && styles.orderButtonSelected,
        ]}
        onPress={() => handleOrderSelection(item)}
      >
        <Text
          style={[
            styles.orderButtonText,
            order === item && styles.orderButtonTextSelected,
          ]}
        >
          {item}
        </Text>
      </Pressable>
    );
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={orderSnapPoints}
      backgroundStyle={styles.bottomSheetBackground}
      index={-1}
      enablePanDownToClose
    >
      <View style={styles.bottomSheetHeader}>
        <Text style={styles.bottomSheetTitle}>Selecione a ordem</Text>
      </View>
      <BottomSheetFlatList
        data={Object.values(Order)}
        keyExtractor={(item) => item}
        renderItem={renderOrderButton}
        contentContainerStyle={styles.bottomSheetContent}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  orderButton: {
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 6,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  orderButtonSelected: {
    backgroundColor: "#333",
  },
  orderButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#333",
  },
  orderButtonTextSelected: {
    color: "#fff",
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

export default OrderBottomSheet;
