import {canvas} from '@react-three/fiber'
import { Environment , Center } from '@react-three/drei'
import shirt from "./shirt"
import Backdrop from "./Backdrop"
import CameraRig from "./CameraRig"
import Shirt from './Shirt'

const Canvas = () => {
  return (
    <canvas>
        <ambientLight intensity = {0.5}/>
    <Environment preset='city' />
   {/* < CameraRig> */}
   {/* <Backdrop/> */}
   <center>
    <Shirt/>
   </center>
   {/* </CameraRig> */}
    </canvas>
  )
}

export default Canvas;
