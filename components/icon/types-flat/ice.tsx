import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function IceIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_1257_35405)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.fill ?? '#fff'}
      >
        <Path d="M14.062 1.02l.056 4.863L9.875 7.92l-.052-4.593 4.24-2.308zM18.315 8.684l-4.2 2.402L9.914 8.68l4.2-2.206 4.202 2.21zM9.167 8.684l-4.2 2.402L.765 8.68l4.2-2.206 4.202 2.21zM4.92 1l4.358 2.159-.111 4.704L5.05 5.825 4.92 1zM14.181 16.294l-4.358-2.159.111-4.704 4.116 2.038.131 4.825zM5.07 16.338l-.055-4.864 4.242-2.036.053 4.592-4.24 2.308z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35405">
          <Path fill={props.fill ?? '#fff'} transform="translate(.765)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IceIcon
