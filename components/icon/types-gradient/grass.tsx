import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function GrassGradientIcon(props: SvgProps) {
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
        d="M17.886 80.902a43.715 43.715 0 01-.957-.928C.28 63.325.28 36.331 16.93 19.682 33.58 3.033 86.63 1.92 86.63 1.92s7.241 61.406-9.408 78.055c-14.787 14.787-37.733 16.44-54.345 4.963L36.262 68.51l21.398-4.62-17.467-1.745 11.1-11.303 12.636-2.768-9.992-2.959 9.992-18.024-14.212 15.94-5.488-7.744 1.932 12.787-9.9 11.16-4.588-14.12v18.777L17.886 80.902z"
        fill="url(#paint0_linear_1515_12639)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_12639"
          x1={-3.94043}
          y1={8.70895}
          x2={66.0856}
          y2={110.15}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default GrassGradientIcon
