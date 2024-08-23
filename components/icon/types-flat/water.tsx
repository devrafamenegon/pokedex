import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function WaterIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.842 12.182c0 3.213-2.614 5.817-5.839 5.817-3.225 0-5.839-2.604-5.839-5.817C3.164 9.058 8.687.476 8.99.008c.007-.01.02-.01.026 0 .303.468 5.826 9.05 5.826 12.174zM8.03 16.134c-2.963-.648-2.456-3.93-2.456-3.93s.809 1.981 2.772 2.623c1.964.642 4.336-.3 4.336-.3s-1.69 2.256-4.652 1.607z"
        fill={props.fill ?? '#fff'}
      />
    </Svg>
  )
}

export default WaterIcon
