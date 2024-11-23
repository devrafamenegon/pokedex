import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function PokedexIcon(props: SvgProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M13 23.833c5.984 0 10.834-4.85 10.834-10.833 0-5.983-4.85-10.834-10.834-10.834C7.017 2.166 2.167 7.016 2.167 13c0 5.983 4.85 10.833 10.833 10.833z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 16.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5v0z"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2.167 13H9.75m6.5 0h7.584" stroke="gray" strokeWidth={1.5} />
    </Svg>
  );
}

export default PokedexIcon;
