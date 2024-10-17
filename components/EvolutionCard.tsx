import { PokemonType } from "@/types/pokemon";
import { formatPokemonNumber } from "@/utils/string";
import { Image, StyleSheet, Text, View } from "react-native";
import PokemonTypeBadge from "./PokemonTypeBadge";
import { getTypeColor } from "@/utils/types/colors";
import TypeGradientIcon from "./TypeGradientIcon";

interface EvolutionCardPros {
  id: number;
  name: string;
  types: PokemonType[];
}

const EvolutionCard: React.FC<EvolutionCardPros> = ({ id, name, types }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          { backgroundColor: getTypeColor(types[0]) },
        ]}
      >
        <View style={styles.imageBackgroundIcon}>
          <TypeGradientIcon type={types[0]} size={80} />
        </View>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>Nº{formatPokemonNumber(id)}</Text>
        <View style={styles.typeContainer}>
          {types.map((type, index) => (
            <PokemonTypeBadge
              type={type}
              isFlexible
              hasText={false}
              height={16}
              isBorderless={true}
              key={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
  },
  infoContainer: {
    flex: 4 / 6,
    paddingVertical: 10,
    marginRight: 48,
    marginLeft: 12,
  },
  name: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 22,
    color: "#1A1A1A",
    textTransform: "capitalize",
  },
  number: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 18,
    color: "#4D4D4D",
    marginBottom: 4,
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    maxWidth: 108,
    height: "100%",
    justifyContent: "center",
    borderRadius: 999,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    display: "flex",
    alignSelf: "center",
  },
  imageBackgroundIcon: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default EvolutionCard;
