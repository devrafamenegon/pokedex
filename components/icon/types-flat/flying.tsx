import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function FlyingIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35411)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.281 16.795c2.637 0 4.895-1.465 5.827-3.543.011-.025-3.742.976-3.622.622.053-.158 2.354-.998 4.03-1.979.963-.563 1.407-1.756 1.407-1.756s-1.623.788-2.444.988c-1.653.403-3.109.36-3.109.317 0-.09 2.417-.55 5.776-2.597 1.58-.962 2.01-2.62 2.01-2.62s-1.738 1.034-2.788 1.376c-2.49.81-4.763 1.054-4.763.944 0-.235 2-.785 4.12-1.812 1.103-.534 2.058-1.232 3.165-2.008 1.81-1.27 2.109-3.532 2.109-3.532s-1.786 1.152-2.657 1.534c-3.596 1.579-6.771 2.406-9.06 2.586-3.456.27-6.283 2.681-6.283 5.812 0 3.13 2.812 5.668 6.282 5.668z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35411">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(-.001)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FlyingIcon
