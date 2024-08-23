import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function RockIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35399)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.714 8.605a.006.006 0 01-.001-.005l1.148-6.696c0-.003.004-.005.007-.005h.363c.003 0 .005.002.006.004l2.587 8.192c.001.002 0 .005-.002.007l-1.907 1.49a.006.006 0 01-.01-.002l-2.19-2.985zM.787 13.045c0 .002.002.005.005.005l3.932 1.286h.006l8.79-6.069a.006.006 0 00.002-.004l.942-6.324a.006.006 0 00-.006-.008H6.673c-.002 0-.004.001-.005.003L.788 9.026a.006.006 0 000 .004v4.014zm5.576 1.619l4.295 1.407.006-.001 5.115-3.669a.007.007 0 00.001-.008l-1.917-2.854a.006.006 0 00-.009-.001l-7.491 5.126z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35399">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.823)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RockIcon
