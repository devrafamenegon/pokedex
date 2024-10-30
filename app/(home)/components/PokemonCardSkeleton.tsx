import React from "react";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { View, StyleSheet } from "react-native";

const PokemonCardSkeleton: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ContentLoader
          speed={1}
          width="100%"
          height={100}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          {/* Skeleton for Pokemon number */}
          <Rect x="0" y="5" rx="4" ry="4" width="60" height="12" />

          {/* Skeleton for Pokemon name */}
          <Rect x="0" y="25" rx="4" ry="4" width="120" height="18" />

          {/* Skeleton for element badges */}
          <Rect x="0" y="55" rx="4" ry="4" width="80" height="24" />
          <Rect x="90" y="55" rx="4" ry="4" width="80" height="24" />
        </ContentLoader>
      </View>

      <View style={styles.imageContainer}>
        {/* Skeleton for Pokemon image */}
        <ContentLoader
          speed={1}
          width="100%"
          height={100}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <Circle cx="50%" cy="50%" r="40" />
        </ContentLoader>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  infoContainer: {
    flex: 4 / 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  imageContainer: {
    flex: 2 / 6,
    height: 100,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    marginRight: 16,
  },
});

export default PokemonCardSkeleton;
