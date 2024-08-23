import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function DarkIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35417)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.3 15.92a6.875 6.875 0 10.295-13.63c1.883 1.428 3.128 3.9 3.128 6.71 0 2.955-1.376 5.535-3.424 6.92zM9.222 18a9 9 0 100-18 9 9 0 000 18z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35417">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.235)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DarkIcon
