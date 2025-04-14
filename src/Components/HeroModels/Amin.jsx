/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Amin.glb 
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Amin(props) {
  const { nodes, materials } = useGLTF('/models/Amin.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.model.geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/Amin.glb');
