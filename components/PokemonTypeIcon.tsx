import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PokemonType } from "@/types/pokemon";
import { getTypeColor } from "@/utils/types/colors";
import { getTypeFlatIcon } from '@/utils/types/flat';

const PokemonTypeIcon: React.FC<{ type: PokemonType }> = ({ type }) => {
  const color = getTypeColor(type);
  const Icon = getTypeFlatIcon(type);
  
  return (
    <View style={styles.iconContainer}>
      <Icon fill={color} width={13} height={13}/>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});

export default PokemonTypeIcon;
