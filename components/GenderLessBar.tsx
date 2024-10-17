import React from "react";
import { View, StyleSheet } from "react-native";

const GenderlessBar = () => {
  return (
    <View style={styles.container}>
      {/* Diagonal Bars */}
      {[...Array(20)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.diagonalBar,
            { left: index * 26 },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 8,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    position: "relative",
    overflow: "hidden",
    borderRadius: 999
  },
  diagonalBar: {
    position: "absolute",
    width: 20,
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    transform: [{ rotate: "45deg" }],
    top: 0,
  },
});

export default GenderlessBar;
