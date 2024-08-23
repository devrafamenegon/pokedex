import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function FairyIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35397)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.494 14.273l2.887-.837 2.494 4.56a.009.009 0 00.015 0l2.493-4.56 2.888.837a.008.008 0 00.01-.01l-.837-2.83 4.434-2.426a.009.009 0 000-.015l-4.47-2.445.873-2.953a.009.009 0 00-.01-.01l-2.955.856L9.89.004a.009.009 0 00-.015 0L7.449 4.44l-2.955-.857a.009.009 0 00-.01.01l.873 2.954-4.47 2.445a.009.009 0 000 .015l4.434 2.425-.838 2.83a.009.009 0 00.01.01zm2.24-5.242l2.046 1.118 1.118 2.046a.008.008 0 00.015 0l1.119-2.046 2.045-1.118a.009.009 0 000-.015l-2.045-1.119-1.119-2.045a.009.009 0 00-.015 0L8.78 7.897 6.734 9.016a.009.009 0 000 .015z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35397">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.882)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FairyIcon
