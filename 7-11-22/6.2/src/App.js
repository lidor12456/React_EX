import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function HideAndSeek () {
  return (
        <div className='main-div'>
            <div className='red'></div>
        </div>


  )
}

function App() {
  let [box, setBox] = useState(false);

  const changeAppearance = () => { 
    if (box===false) {
      setBox(true);
    }
    else {
      setBox(false);

    }
  };

return (
  <div>
    <button onClick={changeAppearance}>show/hide</button>
      {box && (<div className='main-div'> <div className='red'></div> </div>)}
  </div>
)




  
  // return (
  //   <div>
  //     <button onClick={clickHandler}>++</button>
  //     {counter}
  //   </div>

  // )
}

export default App;
