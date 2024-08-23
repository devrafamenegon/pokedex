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

function GhostGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_4311)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.737 93.674c-8.479.434-18.186.434-21.485 0C20.52 90.29 0 71.475 0 46.045 0 20.615 21.043 0 47 0s47 20.615 47 46.045c0 11.828-4.552 22.613-12.033 30.768-2.031 2.215.756 3.768 3.588 5.346 2.777 1.548 5.598 3.12 3.959 5.362-1.806 2.472-11.598 5.632-21.777 6.153zM40.391 40.29c0 3.973-3.288 7.194-7.344 7.194-4.056 0-7.344-3.221-7.344-7.194 0-2.665 1.479-4.992 3.676-6.235a6.475 6.475 0 006.471 6.234h4.54zm22.76-6.235a6.475 6.475 0 01-6.47 6.234h-4.54c0 3.974 3.288 7.195 7.343 7.195 4.056 0 7.344-3.221 7.344-7.194 0-2.665-1.479-4.992-3.676-6.235z"
          fill="url(#paint0_linear_1515_4311)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_4311"
          x1={-9.40837}
          y1={7.04886}
          x2={61.1275}
          y2={117.509}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_4311">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GhostGradientIcon
