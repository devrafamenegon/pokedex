import { View, Text, StyleSheet } from "react-native";

export default function RegionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regiões</Text>
      <Text style={styles.text}>
        Explore as diversas regiões do universo Pokémon.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 16,
  },
});
