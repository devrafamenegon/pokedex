import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

function ProfileActiveIcon(props: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Rect
        x={8.57129}
        y={21.4287}
        width={12.8571}
        height={4.28571}
        rx={2.14286}
        fill="#CD3131"
      />
      <Path
        d="M22.955 7.045c4.393 4.393 4.393 11.517 0 15.91-4.393 4.393-11.517 4.393-15.91 0-4.393-4.393-4.393-11.517 0-15.91 4.393-4.393 11.517-4.393 15.91 0"
        stroke="#173EA5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.487 10.405a3.516 3.516 0 11-4.973 4.973 3.516 3.516 0 014.973-4.973z"
        fill="#173EA5"
      />
      <Path
        d="M17.487 10.405a3.516 3.516 0 11-4.973 4.973 3.516 3.516 0 014.973-4.973M22.5 23.699c-1.794-1.889-4.69-3.074-7.5-3.074a9.806 9.806 0 00-7.134 3.074"
        stroke="#173EA5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileActiveIcon;
