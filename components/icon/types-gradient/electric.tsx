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

function ElectricGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_3030)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.008.107A.08.08 0 0128.085 0H61.1a.08.08 0 01.077.057L76.342 49.05a.08.08 0 01-.077.105h-21.98a.04.04 0 00-.039.051l12.606 44.375c.025.087-.088.143-.142.071L17.721 28.506a.08.08 0 01.065-.13h19.948a.04.04 0 00.038-.053L28.008.107z"
          fill="url(#paint0_linear_1515_3030)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_3030"
          x1={11.8358}
          y1={7.0253}
          x2={89.3115}
          y2={82.9679}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_3030">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ElectricGradientIcon
