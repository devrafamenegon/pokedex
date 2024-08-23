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

function PsychicGradientProps(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_11953)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.706 78.06s-11.853 9.506-35.44 5.572c-17.894-2.984-27.439-22.71-27.439-33.314 0-25.14 18.607-30.86 31.186-30.86 12.58 0 20.785 12.264 20.785 21.76 0 9.494-6.716 17.8-17.167 17.8S42.084 51.68 42.084 44.935s5.458-9.122 10.435-9.122c4.978 0 6.682 4.25 6.682 7.901 0 3.653-2.834 4.96-5.197 4.96-2.364 0-2.597-1.192-3.502-2.445-.905-1.253 1.154-5.996-2.236-5.996-3.389 0-4.02 5.453-4.02 5.453S45.48 56.212 55.63 56.03c10.15-.182 14.965-8.029 13.566-15.797-1.4-7.77-8.94-16.025-22.172-14.356-13.232 1.668-18.635 15.038-16.253 29.326C33.153 69.49 50.27 77.769 63.729 74.79 77.187 71.813 90.59 62.069 90.59 37.366c0-24.703-21.394-39.552-46.905-37.105C18.173 2.708 2.337 25.012 3.351 51.811c1.013 26.798 26.442 41.393 47.944 42.145C72.798 94.708 85.98 82.26 85.98 82.26s2.965-2.643 1.802-4.708c-1.162-2.064-4.076.507-4.076.507z"
          fill="url(#paint0_linear_1515_11953)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_11953"
          x1={-5.43069}
          y1={7.04687}
          x2={67.1606}
          y2={112.618}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_11953">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PsychicGradientProps
