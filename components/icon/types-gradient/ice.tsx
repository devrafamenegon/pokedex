import * as React from "react"
import Svg, { Mask, Path, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg"

function IceGradientComponent(props: SvgProps) {
  return (
    <Svg
      width={94}
      height={94}
      viewBox="0 0 94 94"
      fill="none"
      {...props}
    >
      <Mask id="a" fill="#fff">
        <Path d="M24.402 33.393l20.55 10.274V20.55L24.402 7.706v25.687zM47.52 20.55v23.117l20.55-10.274V7.706L47.52 20.55zM68.07 59.08L47.52 48.805v25.687l20.55 10.274V59.08zM44.952 74.492V48.805L24.402 59.08v25.686l20.55-10.275zM68.07 35.961L47.52 46.236l20.55 10.275 23.118-10.275L68.07 35.961zM24.402 35.961l20.55 10.275-23.118 10.275-20.55-10.275 23.118-10.275z" />
      </Mask>
      <Path
        d="M44.952 43.667L28.869 75.832l52.044 26.022V43.667H44.952zm-20.55-10.274h-35.961v22.225l19.879 9.94 16.082-32.165zm0-25.687l19.06-30.495-55.021-34.388V7.706h35.961zm20.55 12.843h35.96V.618l-16.9-10.564-19.06 30.495zm2.568 23.118H11.56v58.187l52.044-26.022L47.52 43.667zm0-23.118L28.46-9.946 11.56.618v19.931H47.52zM68.07 7.706h35.961v-64.883L49.011-22.79 68.07 7.706zm0 25.687l16.082 32.165 19.879-9.94V33.393H68.07zM47.52 48.805L63.603 16.64 11.559-9.382v58.187H47.52zM68.07 59.08h35.961V36.854l-19.879-9.94L68.07 59.08zm0 25.686l-16.083 32.165 52.044 26.022V84.766H68.07zM47.52 74.491H11.56v22.226l19.879 9.939L47.52 74.491zm-2.568-25.686h35.96V-9.382L28.87 16.64l16.083 32.165zm0 25.687l16.082 32.164 19.879-9.94V74.493H44.952zm-20.55 10.274h-35.961v58.187l52.044-26.022-16.083-32.165zm0-25.687L8.32 26.916l-19.88 9.94V59.08h35.962zM47.52 46.237L31.438 14.071l-64.33 32.165 64.33 32.165L47.52 46.236zm20.55-10.275L82.675 3.1 67.167-3.794l-15.18 7.59L68.07 35.96zm23.118 10.275l14.605 32.862 73.939-32.862-73.939-32.862-14.605 32.862zM68.07 56.511L51.987 88.676l15.18 7.59 15.508-6.893L68.07 56.51zM44.952 46.236l14.605 32.862L129.19 48.15 61.034 14.07 44.952 46.236zm-20.55-10.275L40.485 3.797l-15.18-7.59L9.797 3.1 24.402 35.96zM1.284 46.236L-13.32 13.374l-69.634 30.949L-14.798 78.4 1.284 46.236zm20.55 10.275L5.75 88.676l15.18 7.59 15.508-6.893L21.834 56.51zm39.2-45.008L40.484 1.228 8.32 65.558l20.55 10.274 32.164-64.33zm-.67 21.89V7.706H-11.56v25.687h71.923zM5.343 38.2l20.55 12.844L64.01-9.945 43.461-22.79 5.344 38.2zM8.99 20.55v23.118h71.923V20.55H8.99zm74.492 23.118V20.55H11.559v23.118h71.923zM66.58 51.045L87.13 38.2l-38.12-60.99L28.46-9.946l38.12 60.99zM32.108 7.706v25.687h71.923V7.706H32.108zm19.88-6.478l-20.55 10.275 32.165 64.33 20.549-10.275-32.165-64.33zM31.437 80.97l20.55 10.274 32.164-64.33-20.55-10.274-32.164 64.33zm.67-21.89v25.686h71.923V59.08H32.108zM84.152 52.6l-20.55-10.274-32.164 64.329 20.55 10.275 32.164-64.33zm-.67 21.89V48.806H11.559v25.687h71.923zM8.99 48.806v25.687h71.923V48.805H8.99zm19.88-6.478L8.32 52.6l32.165 64.33 20.549-10.275-32.165-64.33zm31.494 42.44V59.08H-11.56v25.686h71.923zm-19.88 6.477l20.55-10.274-32.165-64.33L8.32 26.915l32.166 64.33zm23.119-12.843l20.549-10.275-32.165-64.33-20.55 10.275 32.166 64.33zm-10.139-9.578l23.118 10.275 29.211-65.724L82.675 3.1l-29.21 65.724zm23.118-55.449L53.464 23.65l29.21 65.724 23.119-10.275-29.21-65.724zm7.57 10.972L63.602 14.07l-32.164 64.33 20.55 10.275 32.164-64.33zM61.034 14.07L40.484 3.797 8.32 68.127 28.87 78.4l32.164-64.33zM9.797 3.1l-23.118 10.275 29.21 65.724 23.119-10.275L9.797 3.1zm-24.595 75.302l20.55 10.275 32.164-64.33-20.55-10.275-32.164 64.33zm51.237 10.972l23.118-10.275-29.21-65.724L7.227 23.65l29.21 65.724z"
        fill="url(#paint0_linear_1515_4556)"
        mask="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1515_4556"
          x1={0.999757}
          y1={8}
          x2={90.9998}
          y2={85}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default IceGradientComponent