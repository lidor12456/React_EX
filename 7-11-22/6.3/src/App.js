import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let [counter, setCounter] = useState(0);
  let bool=true;

  const clickHandlerPlus = () => { 
    if (counter<10) {
      setCounter(counter + 1)
    }
  };
  const clickHandlerMinus = () => {
    if (counter>-10) {

 
    setCounter(counter - 1)

    }
  };

  // {if (counter<0) {
  //   'bg-salmon'
  // }  else {
  //   'bg-green'
  // } }
  return (
    <div>
      <button onClick={clickHandlerPlus}>+</button>
      <div className={counter<0 ? 'bg-salmon' : 'bg-green'}><label>{counter}</label></div>

      <button onClick={clickHandlerMinus}>-</button>

    </div>

  )

}

export default App;
