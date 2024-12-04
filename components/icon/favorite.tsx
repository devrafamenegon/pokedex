import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function FavoriteIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill={props.fill ?? "none"}
      {...props}
    >
      <Path
        d="M24.315 5.378a6.417 6.417 0 00-9.077 0l-1.236 1.237-1.237-1.237a6.418 6.418 0 10-9.077 9.077l1.237 1.236 9.077 9.077 9.076-9.077 1.237-1.236a6.415 6.415 0 000-9.077v0z"
        stroke={props.stroke ?? "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FavoriteIcon;
