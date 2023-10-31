import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridWithContext, { GridProvider } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GridProvider>
      <GridWithContext />
    </GridProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
