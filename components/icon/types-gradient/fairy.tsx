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

function FairyGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_2969)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.86 74.535l15.077-4.372 13.022 23.81c.017.032.062.032.078 0l13.023-23.81 15.077 4.372a.044.044 0 00.055-.055L70.82 59.7l23.154-12.663a.044.044 0 000-.078L70.629 34.192l4.563-15.424a.045.045 0 00-.055-.056l-15.43 4.475L47.036.023a.044.044 0 00-.078 0L34.291 23.187 18.86 18.712a.045.045 0 00-.055.056l4.563 15.424L.023 46.959a.044.044 0 000 .078l23.154 12.664-4.372 14.779a.044.044 0 00.055.055zm11.7-27.374l10.68 5.842 5.843 10.68a.044.044 0 00.078 0l5.842-10.68 10.68-5.842a.045.045 0 000-.078l-10.68-5.842L47.16 30.56a.045.045 0 00-.078 0L41.24 41.24 30.56 47.084a.045.045 0 000 .078z"
          fill="url(#paint0_linear_1515_2969)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_2969"
          x1={-9.40806}
          y1={7.04862}
          x2={61.1255}
          y2={117.505}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_2969">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FairyGradientIcon
