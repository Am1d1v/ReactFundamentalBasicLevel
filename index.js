import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



//const elem = <h2>Some start text</h2>;
//const elem = React.createElement('h1', {className: 'greeting'}, "Some text in React Element");
  const elem = (
    <div>
        <h1>"Some h1 text"</h1>
        <input type='text' />
        <button> Button to click</button>
    </div>
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    elem
);

