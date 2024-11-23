import { PokemonType } from "@/types/pokemon";
import { getTypeGradientIcon } from "@/utils/types/gradient";

interface TypeGradientIconProps {
  type: PokemonType;
  size?: number;
}

const TypeGradientIcon = ({ type, size = 50 }: TypeGradientIconProps) => {
  const IconComponent = getTypeGradientIcon(type);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} />;
};

export default TypeGradientIcon;
