import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function HabilityIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1600_13370)" stroke="#000" strokeOpacity={0.6}>
        <Path
          d="M7.999 14.667a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 10a2 2 0 100-4 2 2 0 000 4v0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M1.332 8h4.667m4 0h4.666" />
      </G>
      <Defs>
        <ClipPath id="clip0_1600_13370">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HabilityIcon
