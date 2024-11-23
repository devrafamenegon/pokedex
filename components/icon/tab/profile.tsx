import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ProfileIcon(props: SvgProps) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M21.425 6.575c4.1 4.1 4.1 10.75 0 14.85s-10.75 4.1-14.85 0-4.1-10.75 0-14.85 10.75-4.1 14.85 0"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.321 9.711a3.282 3.282 0 11-4.641 4.641 3.282 3.282 0 014.641-4.64M20.658 22.118A9.155 9.155 0 0014 19.25a9.152 9.152 0 00-6.658 2.869"
        stroke="gray"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
