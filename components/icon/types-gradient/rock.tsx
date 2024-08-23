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

function RockGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_2668)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.544 44.938a.034.034 0 01-.006-.025l5.997-34.968a.034.034 0 01.033-.028h1.898c.015 0 .027.01.032.023l13.51 42.778a.034.034 0 01-.011.037l-9.962 7.777a.034.034 0 01-.047-.006L72.544 44.938zM-.185 68.12c0 .014.01.027.024.032l20.534 6.714c.01.004.021.002.03-.004l45.9-31.688a.034.034 0 00.014-.023l4.922-33.027a.033.033 0 00-.033-.039H30.55c-.01 0-.02.005-.026.013l-30.7 37.036a.034.034 0 00-.009.021V68.12zm29.115 8.457l22.434 7.349c.01.003.021.001.03-.005l26.71-19.159a.033.033 0 00.008-.045l-10.013-14.9a.033.033 0 00-.047-.009L28.93 76.577z"
          fill="url(#paint0_linear_1515_2668)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_2668"
          x1={-9.61241}
          y1={15.4666}
          x2={39.4626}
          y2={113.278}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_2668">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RockGradientIcon
