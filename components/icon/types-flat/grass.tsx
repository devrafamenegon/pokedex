import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function GrassIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35409)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.484 15.492A8.164 8.164 0 013.3 3.769C6.488.58 16.646.367 16.646.367s1.387 11.759-1.801 14.947a8.166 8.166 0 01-10.407.95l2.563-3.145 4.098-.885-3.345-.334 2.126-2.164 2.42-.53-1.914-.567L12.3 5.187 9.58 8.24 8.528 6.757l.37 2.449-1.896 2.136-.878-2.703v3.595l-2.64 3.258z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35409">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.059)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GrassIcon
