import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function ElectricIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35391)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.952.02A.015.015 0 015.966 0h6.322c.007 0 .013.004.015.01l2.904 9.383a.016.016 0 01-.015.02h-4.209a.008.008 0 00-.007.01l2.414 8.497c.005.017-.017.027-.027.014L3.982 5.459a.015.015 0 01.012-.025h3.82a.008.008 0 00.007-.01L5.951.02z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35391">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.588)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ElectricIcon
