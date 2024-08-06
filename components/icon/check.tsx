import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const CheckIcon = (props: SvgProps) => {
  return (
    <Svg
      width={360}
      height={384}
      viewBox="0 0 360 384"
      fill="none"
      {...props}
    >
      <Path
        d="M105.817 176.699L180.098 251 331.04 100.058C299.967 49.122 244.035 15 180 15 82.237 15 3 94.237 3 192s79.237 177 177 177c91.096 0 166.046-68.833 175.84-157.333"
        stroke="url(#paint0_linear_1028_27386)"
        strokeWidth={29.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1028_27386"
          x1={71.5}
          y1={15}
          x2={164.5}
          y2={268.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#173EA5" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#173EA5" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CheckIcon;
