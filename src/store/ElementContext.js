import React from 'react';

const ElementContext = React.createContext({
  active: false,
  selectedElement: {},
});

export default ElementContext;
