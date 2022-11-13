import { useEffect, useState } from 'react';
import styles from './App.css'


function App ( {myProp}) {
  const [style, setStyle] = useState('orange');

  useEffect(() => {
    setTimeout(()=> {
      console.log('im in');
      setStyle('white')

    },4000)

  }, []);

  return (
    <div>
    <div className='slideInLeft' style={{backgroundColor:style}}></div>
    <div className='slideInLeft' style={{backgroundColor:style}}></div>
    <div className='slideInLeft' style={{backgroundColor:style}}></div>
    <div className='slideInLeft' style={{backgroundColor:style}}></div>
    </div>
  );
}

export default App;
