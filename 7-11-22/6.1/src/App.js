import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const clickHandler = () => { 
    setCounter(counter + 1)
  };
  
  return (
    <div>
      <button onClick={clickHandler}>++</button>
      {counter}
    </div>

  )
}

export default App;
