import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function HeightIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M13.125 13.062H2.875a.125.125 0 00-.125.125v.938c0 .068.056.124.125.124h10.25a.125.125 0 00.125-.125v-.937a.125.125 0 00-.125-.125zm0-11.312H2.875a.125.125 0 00-.125.125v.937c0 .069.056.125.125.125h10.25a.125.125 0 00.125-.125v-.937a.125.125 0 00-.125-.125zM9.544 5.906c.093 0 .147-.11.089-.183L8.058 3.729a.112.112 0 00-.177 0L6.306 5.723a.113.113 0 00.09.183h1.042v4.187h-.982a.113.113 0 00-.089.183l1.575 1.992a.112.112 0 00.177 0l1.575-1.992a.113.113 0 00-.09-.183H8.564V5.906h.98z"
        fill="#000"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default HeightIcon
