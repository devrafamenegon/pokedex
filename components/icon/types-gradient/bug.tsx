import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function BugGradientIcon(props: SvgProps) {
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
        d="M62.826.093a.216.216 0 01.3-.053l6.675 4.673a.216.216 0 01.053.3l-9.29 13.267c4.517 1.443 7.594 3 7.594 3S60.637 34.216 47.88 34.216s-21.82-12.057-21.82-12.057 3.214-2.051 7.978-3.81L23.85 6.206a.216.216 0 01.027-.304L30.118.664a.216.216 0 01.304.027l12.902 15.375a29.978 29.978 0 013.365-.195c1.633 0 3.263.124 4.855.335L62.826.093zm2.524 34.736c3.404-2.432 8.555-8.777 8.555-8.777s13.157 10.426 13.157 32.534c0 22.107-22.746 35.413-22.746 35.413S53.447 83.024 50.78 69.111c-2.668-13.913 3.946-29.362 3.946-29.362s7.22-2.49 10.624-4.92zm-36.66 0c-3.405-2.432-8.555-8.777-8.555-8.777S6.978 36.478 6.978 58.586c0 22.107 22.746 35.413 22.746 35.413S40.592 83.024 43.26 69.111c2.668-13.913-3.947-29.362-3.947-29.362s-7.22-2.49-10.624-4.92z"
        fill="url(#paint0_linear_1515_3250)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_3250"
          x1={-1.03805}
          y1={7.04924}
          x2={73.588}
          y2={106.616}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default BugGradientIcon
