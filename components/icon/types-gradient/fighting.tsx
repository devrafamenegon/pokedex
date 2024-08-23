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

function FightingGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_15488)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.198 7.814C17.336 3.323 21.405 0 26.25 0a10.36 10.36 0 018.683 4.7h3.032a10.338 10.338 0 017.427-3.134c4.269 0 7.936 2.58 9.525 6.267h2.538a10.32 10.32 0 015.483-1.567c4.27 0 7.936 2.58 9.526 6.267h6.902a.32.32 0 01.162.043c.315-.028.634-.043.957-.043 5.726 0 10.368 4.642 10.368 10.368v31.654c0 .19-.005.379-.015.566C90.214 76.69 70.82 94 46.987 94 22.76 94 3.12 76.114 3.12 54.05c0-10.65 4.576-20.326 12.035-27.488-.018 10.383.157 21.117.966 20.933 2.164-.494.473-32.653.077-39.68z"
          fill="url(#paint0_linear_1515_15488)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_15488"
          x1={-5.66104}
          y1={7.04837}
          x2={66.8073}
          y2={112.969}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_15488">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FightingGradientIcon
