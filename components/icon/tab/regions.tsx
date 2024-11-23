import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function RegionsIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13a3 3 0 100-6 3 3 0 000 6v0z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M3 10h6.3m5.4 0H21" stroke="gray" strokeWidth={1.5} />
    </Svg>
  );
}

export default RegionsIcon;
