import { useState, useContext } from 'react';
import EventEmitter from '../utils/EventEmitter';

function Panel() {
    const handleMouseEnter = (e) => {
        EventEmitter.emit('PanelClassHover', e.target.innerText);
    };

    const handleMouseLeave = (e) => {
        EventEmitter.emit('PanelClassNotHover', 'Not');
    };

    return (
        <div>
            <div id='elementClassesContainer'>
                <h1>Periodic Table</h1>

                <div className='elementClasses'>
                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>alkali metal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>alkaline earth metal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>lanthanide</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>actinide</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>transition metal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>post-transition metal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>metalloid</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>diatomic nonmetal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>polyatomic nonmetal</span>
                        <div className='classColor'></div>
                    </div>

                    <div
                        className='class'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>noble gas</span>
                        <div className='classColor'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
