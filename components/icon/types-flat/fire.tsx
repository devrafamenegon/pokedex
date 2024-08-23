import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function FireIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35403)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.855 13.9c.222-.812-.21-2.484-.21-2.484s-.313 1.362-.802 1.865c-.417.43-.929.727-1.662.806a1.782 1.782 0 001.012-1.6c0-.986-.813-1.785-1.815-1.785s-1.815.799-1.815 1.784c0 .27.06.524.17.753-.628-.5-.726-1.3-.726-1.3s-.7 2.906 1.229 4.274c1.928 1.367 5.707.192 5.707.192s-5.407 3.804-9.414-.337c-3.452-3.567-.901-8.263-.901-8.263s-.11.436-.11.941c0 .506.274.891.274.891s.818-1.724 1.454-2.425c.603-.664 1.358-1.202 2.01-1.667.502-.358.944-.672 1.207-.967C9.914 2.956 9.024 0 9.024 0s1.636 1.442 2.093 3.305c.174.71.062 1.518-.038 2.24-.163 1.173-.294 2.12.88 2.059 1.898-.1.25-3.026.25-3.026s4.304 2.263 3.982 6.22c-.321 3.958-4.705 4.857-4.705 4.857s1.146-.94 1.369-1.754z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35403">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.47)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FireIcon
