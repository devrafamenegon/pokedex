import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function MaleIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M7.125 8.25a2.628 2.628 0 012.625 2.624A2.628 2.628 0 017.125 13.5 2.628 2.628 0 014.5 10.874 2.628 2.628 0 017.125 8.25zm0-1.5A4.123 4.123 0 003 10.874 4.123 4.123 0 007.125 15a4.123 4.123 0 003.398-6.464l2.977-2.97V7.5H15V3h-4.5v1.5h1.935L9.457 7.477a4.078 4.078 0 00-2.332-.727z"
        fill="#000"
        fillOpacity={0.7}
      />
    </Svg>
  )
}

export default MaleIcon
