import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function FightingIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35395)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.749 1.496A1.986 1.986 0 017.336.9h.581a1.986 1.986 0 013.246.6h.486a1.986 1.986 0 012.874.9h1.322c.011 0 .022.003.031.008a1.985 1.985 0 012.169 1.977V10.447l-.003.108C17.922 14.685 14.208 18 9.645 18c-4.64 0-8.4-3.425-8.4-7.65 0-2.04.876-3.892 2.304-5.264-.003 1.988.03 4.044.185 4.009.415-.095.09-6.253.015-7.599z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35395">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.647)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FightingIcon
