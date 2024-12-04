import * as React from "react";
import Svg, { G, Circle, Path, Defs, SvgProps } from "react-native-svg";

interface FavoriteCircleIconProps extends SvgProps {
  isFavorited: boolean;
}

const FavoriteCircleIcon: React.FC<FavoriteCircleIconProps> = ({
  isFavorited,
  ...props
}) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G filter="url(#filter0_b_1680_1903)">
        <Circle cx={16} cy={16} r={16} fill="#000" fillOpacity={0.3} />
        <Circle cx={16} cy={16} r={15.25} stroke="#fff" strokeWidth={1.5} />
      </G>
      <Path
        d="M21.894 11.073a3.666 3.666 0 00-5.187 0l-.706.707-.707-.707a3.668 3.668 0 00-5.187 5.187l.707.706 5.187 5.187 5.186-5.187.707-.706a3.667 3.667 0 000-5.187v0z"
        stroke={isFavorited ? "#ff5656" : "#fff"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isFavorited ? "#ff5656" : "transparent"}
      />
      <Defs />
    </Svg>
  );
};

export default FavoriteCircleIcon;
