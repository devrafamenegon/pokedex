import { Pokemon } from "@/types/pokemon";
import { getTextColor, getTypeColor } from "@/utils/types/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { getTypeGradientIcon } from "@/utils/types/gradient";
import { formatPokemonNumber } from "@/utils/string";

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon
}) => {
  const { id, name, types } = pokemon;
  const IconComponent = getTypeGradientIcon(types[0]);

  return (
    <View style={[styles.container, { backgroundColor: `${getTypeColor(types[0])}15` }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.number}>Nº{formatPokemonNumber(id)}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.typeContainer}>
          {types.map((type, index) => {
            const backgroundColor = getTypeColor(type);
            const textColor = getTextColor(backgroundColor);

            return (
              <View
                key={index}
                style={[styles.typeBadge, { backgroundColor }]}
              >
                <PokemonTypeIcon type={type}/>
                <Text style={[styles.typeText, { color: textColor }]}>{type}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View style={[styles.imageContainer, { backgroundColor: getTypeColor(types[0]) }]}>
        <IconComponent style={styles.imageBackgroundIcon}/>
        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif` }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center'
  },
  infoContainer: {
    flex: 4/6,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  number: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  typeBadge: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 48,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    alignItems: 'center'
  },
  typeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    marginLeft: 4,
    textTransform: 'capitalize',
    lineHeight: 15
  },
  imageContainer: {
    flex: 2/6,
    height: 100,
    justifyContent: 'center',
    borderRadius: 15,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'center'
  }, 
  imageBackgroundIcon: {
    position: 'absolute',
    alignSelf: 'center'
  }
});

export default PokemonCard;
