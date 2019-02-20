// Impoert React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create Basic Functional React Component
const App = () => {
  return <h1>Hello World!</h1>;
}

// Render React component into DOM
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);