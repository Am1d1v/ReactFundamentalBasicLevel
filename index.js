import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



//const elem = <h2>Some start text</h2>;
  const elem = React.createElement('h1', null, "Some text in React Element");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    elem
);

