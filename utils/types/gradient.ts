import NormalGradientIcon from '@/components/icon/types-gradient/normal';
import FireGradientIcon from '@/components/icon/types-gradient/fire';
import WaterGradientIcon from '@/components/icon/types-gradient/water';
import ElectricGradientIcon from '@/components/icon/types-gradient/electric';
import GrassGradientIcon from '@/components/icon/types-gradient/grass';
import IceGradientIcon from '@/components/icon/types-gradient/ice';
import FightingGradientIcon from '@/components/icon/types-gradient/fighting';
import PoisonGradientIcon from '@/components/icon/types-gradient/poison';
import GroundGradientIcon from '@/components/icon/types-gradient/ground';
import FlyingGradientIcon from '@/components/icon/types-gradient/flying';
import PsychicGradientIcon from '@/components/icon/types-gradient/psychic';
import BugGradientIcon from '@/components/icon/types-gradient/bug';
import RockGradientIcon from '@/components/icon/types-gradient/rock';
import GhostGradientIcon from '@/components/icon/types-gradient/ghost';
import DragonGradientIcon from '@/components/icon/types-gradient/dragon';
import DarkGradientIcon from '@/components/icon/types-gradient/dark';
import SteelGradientIcon from '@/components/icon/types-gradient/steel';
import FairyGradientIcon from '@/components/icon/types-gradient/fairy';
import { PokemonType } from '@/types/pokemon';

const typeGradientIcons = {
  normal: NormalGradientIcon,
  fire: FireGradientIcon,
  water: WaterGradientIcon,
  electric: ElectricGradientIcon,
  grass: GrassGradientIcon,
  ice: IceGradientIcon,
  fighting: FightingGradientIcon,
  poison: PoisonGradientIcon,
  ground: GroundGradientIcon,
  flying: FlyingGradientIcon,
  psychic: PsychicGradientIcon,
  bug: BugGradientIcon,
  rock: RockGradientIcon,
  ghost: GhostGradientIcon,
  dragon: DragonGradientIcon,
  dark: DarkGradientIcon,
  steel: SteelGradientIcon,
  fairy: FairyGradientIcon
};

export const getTypeGradientIcon = (type: PokemonType) => {
  return typeGradientIcons[type];
};