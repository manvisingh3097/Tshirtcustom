import React from 'react'
import { Easing } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal , useTexture , useGLTF } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state);
  return (
    <div>
      
    </div>
  )
}

export default Shirt
