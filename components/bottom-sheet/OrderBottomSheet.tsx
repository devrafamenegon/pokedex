import React, { useMemo, forwardRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface OrderBottomSheetProps {
  selectedOrder: string;
  setSelectedOrder: (order: string) => void;
}

const OrderBottomSheet = forwardRef<
  BottomSheetModalMethods,
  OrderBottomSheetProps
>(({ selectedOrder, setSelectedOrder }, ref) => {
  const orderSnapPoints = useMemo(() => ["40%"], []);

  const handleOrderSelection = (order: string) => {
    setSelectedOrder(order);
    (ref as React.RefObject<BottomSheetModalMethods>).current?.close();
  };

  // Renderização dos botões de ordenação
  const renderOrderButton = ({ item }: { item: string }) => {
    return (
      <Pressable
        style={[
          styles.orderButton,
          selectedOrder === item && styles.orderButtonSelected,
        ]}
        onPress={() => handleOrderSelection(item)}
      >
        <Text
          style={[
            styles.orderButtonText,
            selectedOrder === item && styles.orderButtonTextSelected,
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
        data={["Menor número", "Maior número", "A-Z", "Z-A"]}
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
