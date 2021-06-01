import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';

function App() {
  const [selecteElementClass, setSelectedElementClass] = useState('');
  const [selected, setSelected] = useState(false);

  const handleMouseEnter = (e) => {
    setSelectedElementClass(e.target.innerText);
    setSelected(true);
  };

  const handleMouseLeave = (e) => {
    setSelectedElementClass('');
    setSelected(false);
  };

  return (
    <div id='App'>
      <PeriodicTable
        selectedElementClass={selecteElementClass}
        updateText={selected}
      />
      <div id='elementClassesContainer'>
        <h1>Periodic Table</h1>
        <div className='elementClasses'>
          <div
            className='class'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>noble gas</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>diatomic nonmetal</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>alkaline earth metal</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>alkali metal</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>transition metal</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>Half Metal</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>Inert Gas</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>Lantanide</span>
            <div className='classColor'></div>
          </div>
          <div className='class'>
            <span>Actinide</span>
            <div className='classColor'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
