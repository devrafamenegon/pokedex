import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps
} from "react-native-svg"

function FireGradientIcon(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1515_1110)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.671 72.593c1.162-4.247-1.093-12.977-1.093-12.977s-1.635 7.112-4.19 9.74c-2.18 2.243-4.85 3.798-8.68 4.207 3.132-1.521 5.285-4.692 5.285-8.358 0-5.145-4.243-9.316-9.477-9.316s-9.478 4.17-9.478 9.316c0 1.405.317 2.738.884 3.933-3.274-2.608-3.789-6.79-3.789-6.79s-3.656 15.178 6.417 22.318c10.073 7.14 29.806 1.002 29.806 1.002s-28.239 19.869-49.164-1.756C3.167 65.284 16.488 40.76 16.488 40.76s-.575 2.275-.575 4.916c0 2.641 1.431 4.65 1.431 4.65s4.272-9.002 7.596-12.664c3.146-3.465 7.09-6.275 10.496-8.703 2.622-1.868 4.926-3.51 6.302-5.049C49.316 15.436 44.669.001 44.669.001s8.543 7.531 10.928 17.257c.91 3.708.324 7.926-.199 11.699-.849 6.124-1.535 11.072 4.598 10.75 9.911-.518 1.299-15.798 1.299-15.798s22.481 11.816 20.802 32.482c-1.68 20.666-24.574 25.364-24.574 25.364s5.987-4.915 7.148-9.162z"
          fill="url(#paint0_linear_1515_1110)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_1110"
          x1={4.69902}
          y1={7.04983}
          x2={81.4657}
          y2={97.1332}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1515_1110">
          <Path fill="#fff" d="M0 0H94V94H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FireGradientIcon
