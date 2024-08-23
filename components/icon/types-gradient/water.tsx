import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function WaterGradientIcon(props: SvgProps) {
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
        d="M77.508 63.619c0 16.777-13.652 30.378-30.492 30.378-16.84 0-30.493-13.6-30.493-30.378 0-16.317 28.843-61.13 30.425-63.576.036-.056.1-.056.135 0 1.582 2.445 30.425 47.259 30.425 63.576zM41.933 84.258c-15.474-3.386-12.826-20.526-12.826-20.526s4.226 10.347 14.48 13.698c10.252 3.352 22.644-1.564 22.644-1.564s-8.825 11.777-24.298 8.392z"
        fill="url(#paint0_linear_1515_17961)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_17961"
          x1={10.4195}
          y1={7.04952}
          x2={88.1572}
          y2={86.0338}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default WaterGradientIcon
