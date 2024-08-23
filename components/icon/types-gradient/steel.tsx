import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function SteelGradientIcon(props: SvgProps) {
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
        d="M.01 46.732a.069.069 0 010-.07L23.645 6.279a.069.069 0 01.06-.033h46.848c.024 0 .047.013.06.034L93.99 46.663a.068.068 0 010 .069L70.613 87.07a.069.069 0 01-.059.034H23.705a.068.068 0 01-.059-.034L.009 46.732zm68.767-.057c0 12.023-9.746 21.77-21.77 21.77-12.023 0-21.77-9.747-21.77-21.77 0-12.024 9.747-21.77 21.77-21.77 12.024 0 21.77 9.746 21.77 21.77z"
        fill="url(#paint0_linear_1515_8740)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_8740"
          x1={-9.40836}
          y1={12.3082}
          x2={47.0375}
          y2={115.067}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SteelGradientIcon
