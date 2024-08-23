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

function PoisonGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_13302)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.545 72.235C88.038 64.645 94 53.678 94 41.483 94 18.573 72.957 0 47 0S0 18.573 0 41.483C0 53.238 5.54 63.851 14.44 71.4a21.625 21.625 0 00-.835 6.007C13.605 86.57 19.143 94 25.974 94c4.438 0 8.33-3.137 10.513-7.848C38.669 90.863 42.56 94 47 94c4.046 0 7.638-2.606 9.895-6.636C59.15 91.394 62.743 94 66.789 94c6.831 0 12.369-7.43 12.369-16.593a21.82 21.82 0 00-.613-5.172zm-4.334-29.93c0 11.632-12.46 21.061-27.83 21.061-15.369 0-27.828-9.429-27.828-21.06 0-11.632 12.46-21.06 27.829-21.06s27.829 9.428 27.829 21.06z"
          fill="url(#paint0_linear_1515_13302)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_13302"
          x1={-9.40837}
          y1={7.04886}
          x2={61.1275}
          y2={117.509}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_13302">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PoisonGradientIcon
