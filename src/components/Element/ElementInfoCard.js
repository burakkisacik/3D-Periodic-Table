import React, { useState } from 'react';
import { Html } from '@react-three/drei';

function ElementInfoCard(props) {
  const [hidden, setVisible] = useState(false);

  return (
    <mesh>
      <Html
        style={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxSizing: 'border-box',
          padding: '20px',
          width: '600px',
          height: '600px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          color: 'white',
          fontSize: '36px',
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`,
        }}
        distanceFactor={1.5}
        position={[1.5, 1.5, 1]}
        transform
        occlude
        onOcclude={setVisible}
      >
        <div>
          <h1>{props.element.name}</h1>
        </div>
      </Html>
    </mesh>
  );
}

export default ElementInfoCard;
