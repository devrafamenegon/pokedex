import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <Path
        d="M22.166 12.667L15.833 19l6.333 6.333"
        stroke={props.stroke ?? "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrowIcon;
