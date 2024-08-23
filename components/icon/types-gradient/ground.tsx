import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function GroundGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.703 80.735a.037.037 0 01-.035-.05l23.998-67.81a.037.037 0 01.035-.024h25.62c.015 0 .029.01.034.024l23.643 67.811a.037.037 0 01-.035.05h-73.26zM.037 81a.037.037 0 01-.035-.05l17.871-47.71a.037.037 0 01.035-.024h15.528c.025 0 .043.025.034.05l-17.28 47.71a.037.037 0 01-.035.024H.037z"
        fill="url(#paint0_linear_1515_1533)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_1533"
          x1={-9.40834}
          y1={17.961}
          x2={33.5728}
          y2={110.801}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default GroundGradientIcon
