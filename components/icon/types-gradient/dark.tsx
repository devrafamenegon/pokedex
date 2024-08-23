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

function DarkGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_1089)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.114 83.14c1.786.274 3.615.416 5.477.416 19.829 0 35.903-16.074 35.903-35.903 0-19.828-16.074-35.902-35.903-35.902-1.33 0-2.644.072-3.936.213C53.49 19.416 59.994 32.324 59.994 47c0 15.429-7.188 28.905-17.88 36.14zM46.938 94c25.958 0 47-21.042 47-47 0-25.957-21.042-47-47-47-25.957 0-47 21.043-47 47 0 25.958 21.043 47 47 47z"
          fill="url(#paint0_linear_1515_1089)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_1089"
          x1={-9.46989}
          y1={7.04935}
          x2={61.066}
          y2={117.51}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_1089">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DarkGradientIcon
