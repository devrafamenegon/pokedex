import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function WeightIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M8 2.5c-.822 0-1.5.678-1.5 1.5 0 .176.037.342.094.5h-2.5l-.079.407-1.5 7.5-.015.046V13.5h11v-1.047l-.015-.046-1.5-7.5-.079-.407h-2.5c.06-.16.092-.33.094-.5 0-.822-.678-1.5-1.5-1.5zm0 1c.281 0 .5.219.5.5 0 .282-.219.5-.5.5a.494.494 0 01-.5-.5c0-.281.219-.5.5-.5zm-3.094 2h6.188l1.406 7h-9l1.406-7z"
        fill={props.fill ?? '#333'}
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default WeightIcon
