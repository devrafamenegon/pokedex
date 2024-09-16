import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function DownArrowIcon(props: SvgProps) {
  return (
    <Svg width={24} height={37} viewBox="0 0 24 37" fill="none" {...props}>
      <Path
        d="M12.768 31.454a1 1 0 01-1.536 0l-6.864-8.23a1 1 0 01.768-1.64h1.855a1 1 0 001-1l.008-14.96a1 1 0 011-.999H15a1 1 0 011 1v14.958a1 1 0 001 1h1.864a1 1 0 01.768 1.64l-6.864 8.231z"
        fill="#173EA5"
      />
    </Svg>
  );
}

export default DownArrowIcon;
