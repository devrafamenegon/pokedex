import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function GhostIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1257_35401)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.148 17.938c-1.624.083-3.483.083-4.114 0C4.106 17.29.177 13.687.177 8.818c0-4.87 4.03-8.818 9-8.818s9 3.948 9 8.817c0 2.265-.872 4.33-2.304 5.892-.39.424.144.721.687 1.024.532.296 1.072.597.758 1.026-.346.474-2.221 1.079-4.17 1.179zM7.91 7.715c0 .76-.63 1.378-1.406 1.378-.777 0-1.406-.617-1.406-1.378 0-.51.283-.956.704-1.194a1.24 1.24 0 001.239 1.194h.87zm4.359-1.194a1.24 1.24 0 01-1.24 1.194h-.869c0 .76.63 1.378 1.406 1.378.777 0 1.407-.617 1.407-1.378 0-.51-.284-.956-.704-1.194z"
          fill={props.fill ?? '#fff'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1257_35401">
          <Path
            fill={props.fill ?? '#fff'}
            transform="translate(.177)"
            d="M0 0H18.0001V18.0001H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GhostIcon
