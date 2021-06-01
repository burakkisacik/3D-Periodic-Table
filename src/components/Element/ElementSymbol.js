import React, { useRef, useLayoutEffect } from 'react';
import Roboto from '../../assets/helvetiker_regular.typeface.json';
import { FontLoader } from 'three';

function ElementSymbol(props) {
  const mesh = useRef(null);

  useLayoutEffect(() => {
    mesh.current.geometry.center();
  }, [props.active, props.hovered]);

  const text = props.symbol || 'H';
  const font = new FontLoader().parse(Roboto);
  const textOptions = {
    font: font,
    size: 0.3,
    height: 0.02,
    curveSegments: 5,
    bevelEnabled: false,
  };
  return (
    <mesh ref={mesh}>
      <textBufferGeometry attach='geometry' args={[text, textOptions]} />
      <meshBasicMaterial attach='material' color={props.color || 'white'} />
    </mesh>
  );
}

export default ElementSymbol;
