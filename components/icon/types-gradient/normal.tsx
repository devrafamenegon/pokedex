import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps
} from "react-native-svg"

function NormalGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_9259)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94 46.994c0 25.957-21.043 47-47 47s-47-21.043-47-47 21.043-47 47-47 47 21.043 47 47zm-20.143 0c0 14.833-12.024 26.857-26.857 26.857S20.143 61.827 20.143 46.994 32.167 20.137 47 20.137s26.857 12.024 26.857 26.857z"
          fill="url(#paint0_linear_1515_9259)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_9259"
          x1={-9.40832}
          y1={7.0432}
          x2={61.1271}
          y2={117.503}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_9259">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalGradientIcon
