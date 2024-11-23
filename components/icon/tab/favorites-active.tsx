import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function FavoritesActiveIcon(props: SvgProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M22.577 4.994a5.959 5.959 0 00-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 10-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 000-8.428z"
        fill="#FD525C"
        stroke="#173EA5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FavoritesActiveIcon;
