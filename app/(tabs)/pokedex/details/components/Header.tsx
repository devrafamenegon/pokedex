import { Pressable, View, StyleSheet } from "react-native";
import BackArrowIcon from "@/components/icon/back-arrow";
import FavoriteIcon from "@/components/icon/favorite";

type HeaderProps = {
  onBack: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
};

const Header = ({ onBack, onFavorite, isFavorite }: HeaderProps) => (
  <View style={styles.headerContainer}>
    <Pressable style={styles.backArrow} onPress={onBack}>
      <BackArrowIcon stroke={"#fff"} />
    </Pressable>
    <Pressable style={styles.favorite} onPress={onFavorite}>
      <FavoriteIcon
        stroke={isFavorite ? "#ff5656" : "#fff"}
        fill={isFavorite ? "#ff5656" : "transparent"}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 100,
    marginHorizontal: 16,
  },
  backArrow: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 32,
    margin: -32,
  },
  favorite: {
    position: "absolute",
    top: 0,
    right: 16,
    padding: 32,
    margin: -32,
  },
});

export default Header;
