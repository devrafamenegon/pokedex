import { StyleSheet, Text, View } from "react-native"
import WeightIcon from "./icon/weight";
import { capitalizeFirstLetter } from "@/utils/string";
import HeightIcon from "./icon/height";
import CategoryIcon from "./icon/category";
import HabilityIcon from "./icon/hability";

interface PokemonInfoBadgeProps {
  label: string,
  value: string | string[],
  type: 'weight' | 'height' | 'category' | 'hability'
}

const iconMap: { [key: string]: React.ReactNode } = {
  weight: <WeightIcon />,
  height: <HeightIcon />,
  category: <CategoryIcon />,
  hability: <HabilityIcon />,
};

const PokemonInfoBadge: React.FC<PokemonInfoBadgeProps> = ({
  label,
  value,
  type
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {iconMap[type]}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        {typeof value === 'string' ? (
          <Text style={styles.value}>{capitalizeFirstLetter(value)}</Text>
        ) : (
          value.map((v) => <Text style={styles.value}>{capitalizeFirstLetter(v)}</Text>) 
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  labelContainer: {
    flexDirection: 'row',
    gap: 6
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  valueContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#e6e6e6'
  },
  value: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default PokemonInfoBadge;