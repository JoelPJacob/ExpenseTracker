import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EyeOpenIcon = (props) => (
  <Svg
  width={18}
  height={12}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M9 0C4.91 0 1.415 2.488 0 6c1.415 3.512 4.91 6 9 6s7.584-2.488 9-6c-1.416-3.512-4.91-6-9-6Zm0 10c-2.258 0-4.09-1.792-4.09-4S6.741 2 9 2s4.09 1.792 4.09 4-1.832 4-4.09 4Zm0-6.4C7.642 3.6 6.545 4.672 6.545 6c0 1.328 1.097 2.4 2.455 2.4s2.454-1.072 2.454-2.4c0-1.328-1.096-2.4-2.454-2.4Z"
    fill="#000"
    fillOpacity={0.6}
  />
</Svg>
)

export default EyeOpenIcon
