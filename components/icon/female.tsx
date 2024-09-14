import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function FemaleIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M13.125 7.125A4.123 4.123 0 009 3a4.123 4.123 0 00-.75 8.175v1.575h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5v-1.5h-1.5v-1.575a4.116 4.116 0 003.375-4.05zm-6.75 0A2.628 2.628 0 019 4.5a2.628 2.628 0 012.625 2.625A2.628 2.628 0 019 9.75a2.628 2.628 0 01-2.625-2.625z"
        fill="#000"
        fillOpacity={0.7}
      />
    </Svg>
  )
}

export default FemaleIcon
