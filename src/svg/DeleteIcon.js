import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function DeleteIcon(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 1024.00 1024.00"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      strokeWidth={19.456}
      {...props}
    >
      <G fill="#231815">
        <Path d="M960 160H668.8a160 160 0 00-313.6 0H64a32 32 0 000 64h896a32 32 0 000-64zM512 96a96 96 0 0190.24 64H421.76A96 96 0 01512 96zm332.16 194.56a32 32 0 00-34.88 6.72A32 32 0 00800 320a32 32 0 1064 0 33.6 33.6 0 00-9.28-22.72 32 32 0 00-10.56-6.72zM832 416a32 32 0 00-32 32v96a32 32 0 0064 0v-96a32 32 0 00-32-32zm0 224a32 32 0 00-32 32v224a32 32 0 01-32 32H256a32 32 0 01-32-32V320a32 32 0 00-64 0v576a96 96 0 0096 96h512a96 96 0 0096-96V672a32 32 0 00-32-32z" />
        <Path d="M384 768V352a32 32 0 00-64 0v416a32 32 0 0064 0zm160 0V352a32 32 0 00-64 0v416a32 32 0 0064 0zm160 0V352a32 32 0 00-64 0v416a32 32 0 0064 0z" />
      </G>
    </Svg>
  )
}

export default DeleteIcon
