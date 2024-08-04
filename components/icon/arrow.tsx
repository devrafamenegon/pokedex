import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      {...props}
    >
      <Path
        d="M17.999 13.502H6.749M13.499 19.127l5.625-5.625M13.499 7.876l5.625 5.625"
        stroke="#000"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowIcon;
