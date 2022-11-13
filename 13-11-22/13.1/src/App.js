import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [color, setColor] = useState('blue')
  useEffect(()=> {
    setColor('red')
  },[])
  return (
        <div>
          <p>my fav is {color}</p>
        </div>
  );
}

export default App;
