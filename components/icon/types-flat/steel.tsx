import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function SteelIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35393)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.53 8.949a.013.013 0 010-.014l4.527-7.733a.013.013 0 01.011-.006h8.971c.005 0 .01.002.012.006l4.476 7.734a.013.013 0 010 .013l-4.476 7.724a.013.013 0 01-.012.007H5.07a.013.013 0 01-.012-.007L.53 8.95zM13.7 8.938a4.169 4.169 0 11-8.337 0 4.169 4.169 0 018.337 0z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35393">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.529)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SteelIcon
