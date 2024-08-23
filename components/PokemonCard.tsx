import { Pokemon } from "@/types/pokemon";
import { getTypeColor } from "@/utils/types/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { getTypeGradientIcon } from "@/utils/types/gradient";

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon
}) => {
  const { id, name, types, img } = pokemon;
  const IconComponent = getTypeGradientIcon(types[0]);

  return (
    <View style={[styles.container, { backgroundColor: `${getTypeColor(types[0])}15` }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.number}>#{id}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.elementContainer}>
          {types.map((type, index) => (
            <View
              key={index}
              style={[styles.elementBadge, { backgroundColor: getTypeColor(type) }]}
            >
              <PokemonTypeIcon type={type}/>
              <Text style={styles.elementText} >{type}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.imageContainer, { backgroundColor: getTypeColor(types[0]) }]}>
        <IconComponent style={styles.imageBackgroundIcon}/>
        <Image source={{ uri: img }} style={styles.image} />
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
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  elementContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  elementBadge: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 48,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    alignItems: 'center'
  },
  elementText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#000',
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
