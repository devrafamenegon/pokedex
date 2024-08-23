import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function PoisonIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35407)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.745 13.832c1.818-1.453 2.96-3.553 2.96-5.888 0-4.388-4.03-7.944-9-7.944-4.971 0-9 3.556-9 7.944 0 2.25 1.06 4.283 2.765 5.728a4.14 4.14 0 00-.16 1.15C3.31 16.579 4.37 18 5.678 18c.85 0 1.596-.6 2.013-1.503C8.11 17.4 8.855 18 9.705 18c.774 0 1.462-.499 1.894-1.27.432.771 1.12 1.27 1.895 1.27 1.308 0 2.369-1.422 2.369-3.177 0-.346-.042-.68-.118-.99zm-.83-5.73c0 2.226-2.386 4.032-5.329 4.032-2.943 0-5.329-1.806-5.329-4.033 0-2.227 2.386-4.033 5.33-4.033 2.942 0 5.328 1.806 5.328 4.033z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35407">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.705)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PoisonIcon
