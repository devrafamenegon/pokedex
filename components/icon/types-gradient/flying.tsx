import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function FlyingGradientIcon(props: SvgProps) {
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
        d="M32.81 87.708c13.77 0 25.56-7.653 30.426-18.502.06-.132-19.54 5.094-18.914 3.246.279-.825 12.293-5.213 21.046-10.333 5.031-2.942 7.348-9.171 7.348-9.171s-8.476 4.115-12.76 5.16c-8.636 2.103-16.237 1.877-16.237 1.657 0-.474 12.621-2.872 30.163-13.562 8.252-5.028 10.493-13.689 10.493-13.689s-9.072 5.404-14.556 7.188c-13.005 4.23-24.873 5.506-24.873 4.933 0-1.226 10.445-4.098 21.518-9.463 5.757-2.79 10.744-6.435 16.522-10.488C92.44 18.053 94 6.242 94 6.242s-9.325 6.014-13.876 8.012c-18.778 8.241-35.358 12.565-47.314 13.5C14.764 29.169 0 41.76 0 58.108s14.69 29.601 32.81 29.601z"
        fill="url(#paint0_linear_1515_1180)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_1180"
          x1={6}
          y1={12.0001}
          x2={88}
          y2={86.5001}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FlyingGradientIcon
