import React, { useRef, useLayoutEffect } from 'react';
import Roboto from '../../assets/helvetiker_regular.typeface.json';
import { FontLoader } from 'three';

function ElementAtomicNumber(props) {
    const mesh = useRef(null);

    useLayoutEffect(() => {
        mesh.current.geometry.center();
    }, [props.active, props.hovered, props.panelHover]);

    const text = props.atomicNumber.toString() || '1';
    const font = new FontLoader().parse(Roboto);
    const textOptions = {
        font: font,
        size: 0.1,
        height: 0.02,
        curveSegments: 5,
        bevelEnabled: false,
    };
    return (
        <mesh ref={mesh} position={[0.2, 0.3, 0]}>
            <textGeometry attach='geometry' args={[text, textOptions]} />
            <meshBasicMaterial
                attach='material'
                color={props.color || 'white'}
            />
        </mesh>
    );
}

export default ElementAtomicNumber;
