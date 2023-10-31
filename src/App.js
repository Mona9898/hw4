import React, { useState, useContext, createContext } from 'react';
import './App.css';

// Child Component
function Cell({ index }) {
  const { toggleCellState, activeCells } = useGrid();

  const cellStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: activeCells[index] ? 'black' : 'white',
    display: 'inline-block',
    margin: '1px'
  };

  return (
    <div style={cellStyle} onClick={() => toggleCellState(index)}></div>
  );
}

// Parent Component with Context
const GridContext = createContext();

export function useGrid() {
  return useContext(GridContext);
}

export function GridProvider({ children }) {
  const [activeCells, setActiveCells] = useState([false, false, false, false]);
  
  const toggleCellState = index => {
    const newCells = [...activeCells];
    newCells[index] = !newCells[index];
    setActiveCells(newCells);
  };
  
  const countActiveCells = () => activeCells.filter(cell => cell).length;

  const value = {
    activeCells,
    toggleCellState,
    countActiveCells
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}

function GridWithContext() {
  const { countActiveCells } = useGrid();

  return (
    <div className="grid-container">
      <p>Count: {countActiveCells()}</p>
      <div className="grid">
        {[0, 1, 2, 3].map(index => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default GridWithContext;
