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
                    'box-shadow': '0 25px 45px rgba(0, 0, 0, 0.1)',
                }}
                distanceFactor={1.5}
                position={[1.5, -1.5, 1]}
                transform
                occlude
                onOcclude={setVisible}
            >
                <div className='TDhtml'>
                    <p>{props.element.atomic_mass} g/mol</p>
                    <a href={props.element.source} target='_blank'>
                        {props.element.symbol}
                    </a>
                    <p>{props.element.name}</p>
                </div>
            </Html>
        </mesh>
    );
}

export default ElementInfoCard;
