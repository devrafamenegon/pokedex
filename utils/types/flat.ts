import NormalFlatIcon from '@/components/icon/types-flat/normal';
import FireFlatIcon from '@/components/icon/types-flat/fire';
import WaterFlatIcon from '@/components/icon/types-flat/water';
import ElectricFlatIcon from '@/components/icon/types-flat/electric';
import GrassFlatIcon from '@/components/icon/types-flat/grass';
import IceFlatIcon from '@/components/icon/types-flat/ice';
import FightingFlatIcon from '@/components/icon/types-flat/fighting';
import PoisonFlatIcon from '@/components/icon/types-flat/poison';
import GroundFlatIcon from '@/components/icon/types-flat/ground';
import FlyingFlatIcon from '@/components/icon/types-flat/flying';
import PsychicFlatIcon from '@/components/icon/types-flat/psychic';
import BugFlatIcon from '@/components/icon/types-flat/bug';
import RockFlatIcon from '@/components/icon/types-flat/rock';
import GhostFlatIcon from '@/components/icon/types-flat/ghost';
import DragonFlatIcon from '@/components/icon/types-flat/dragon';
import DarkFlatIcon from '@/components/icon/types-flat/dark';
import SteelFlatIcon from '@/components/icon/types-flat/steel';
import FairyFlatIcon from '@/components/icon/types-flat/fairy';
import { PokemonType } from '@/types/pokemon';

const typeFlatIcons = {
  normal: NormalFlatIcon,
  fire: FireFlatIcon,
  water: WaterFlatIcon,
  electric: ElectricFlatIcon,
  grass: GrassFlatIcon,
  ice: IceFlatIcon,
  fighting: FightingFlatIcon,
  poison: PoisonFlatIcon,
  ground: GroundFlatIcon,
  flying: FlyingFlatIcon,
  psychic: PsychicFlatIcon,
  bug: BugFlatIcon,
  rock: RockFlatIcon,
  ghost: GhostFlatIcon,
  dragon: DragonFlatIcon,
  dark: DarkFlatIcon,
  steel: SteelFlatIcon,
  fairy: FairyFlatIcon
};

export const getTypeFlatIcon = (type: PokemonType) => {
  return typeFlatIcons[type];
};