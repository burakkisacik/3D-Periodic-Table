import React, { useRef, useState, useEffect } from 'react';
import ElementSymbol from './ElementSymbol';
import ElementAtomicNumber from './ElementAtomicNumber';
import ElementName from './ElementName';
import { useSpring, animated, config } from '@react-spring/three';
import ElementInfoCard from './ElementInfoCard';

function ElementBox(props) {
  const iMesh = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);

  const { zposition } = useSpring({
    zposition: active ? 2 : 1,
    config: config.wobbly,
  });

  const { opa } = useSpring({
    opa: hovered || active ? 0.2 : 0.1,
    config: config.wobbly,
  });

  const colorMap = {
    'noble gas': '#04bcd4',
    'alkaline earth metal': '#ff9800',
    'diatomic nonmetal': '#03a9f3',
    'alkali metal': '#f44336',
    'transition metal': '#efbb31',
    'post-transition metal': '#218380',
    lanthanide: '#8bc34a',
    metalloid: '#73D2DE',
    actinide: '#ccdc3a',
  };

  const color = colorMap[props.element.category] || 'white';

  const xpos = props.element.xpos - 8;
  const ypos = props.element.ypos * -1 + 5;

  const ThePositon = [xpos, ypos, 1];

  const handleClick = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHover(true);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <animated.group
      position-z={zposition}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      ref={iMesh}
      position={ThePositon}
    >
      <mesh>
        <boxBufferGeometry />
        <animated.meshBasicMaterial
          color={color}
          wireframe={false}
          transparent={true}
          opacity={opa}
        />
      </mesh>
      <ElementSymbol
        symbol={props.element.symbol}
        color={color}
        active={active}
        hovered={hovered}
      />
      <ElementAtomicNumber
        atomicNumber={props.element.number}
        color={color}
        active={active}
        hovered={hovered}
      />
      <ElementName
        name={props.element.name}
        color={color}
        active={active}
        hovered={hovered}
      />
      {active && <ElementInfoCard element={props.element} />}
    </animated.group>
  );
}

export default ElementBox;
