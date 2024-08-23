import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function GroundIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35421)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.375 15.46a.007.007 0 01-.007-.01L8.964 2.467a.007.007 0 01.006-.005h4.906c.003 0 .006.002.007.005L18.41 15.45a.007.007 0 01-.006.01H4.375zm-3.957.05a.007.007 0 01-.007-.009l3.422-9.136a.007.007 0 01.007-.004h2.973c.005 0 .009.004.007.009l-3.31 9.136a.007.007 0 01-.006.005H.418z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35421">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.41)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GroundIcon
