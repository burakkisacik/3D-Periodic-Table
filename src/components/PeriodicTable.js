import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ElementBox from './Element/ElementBox';
import { OrbitControls } from '@react-three/drei';
import data from '../assets/periodicTable.json';

function PeriodicTable(props) {
  return (
    <div id='canvas-container'>
      <Canvas camera={{ position: [0, 0, 12] }}>
        {data.elements.map((element) => {
          let xoffset = (element.xpos - 1) / 50;
          element.xpos += xoffset;

          let yoffset = (element.ypos - 1) / 50;
          element.ypos += yoffset;

          return <ElementBox key={element.name} element={element} />;
        })}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default PeriodicTable;
