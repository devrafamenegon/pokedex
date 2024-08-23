import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function NormalIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35415)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.94 8.999a9 9 0 11-17.999 0 9 9 0 0118 0zm-3.856 0a5.143 5.143 0 11-10.286 0 5.143 5.143 0 0110.286 0z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35415">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.94)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default NormalIcon
