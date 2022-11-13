import React from 'react'
import {useEffect, useState} from 'react'
function App() {
  const [color,setColor]=useState(0);
  const colArr = ['red','blue','green','purple','pink']
  const [circle,setCircle] = useState(0)
  useEffect(() => {
    let interval = setInterval(() => {
  
      setColor((v) => {
        return v === 4 ? 0 : v + 1;
      });
      setCircle(prev=>{
        console.log(prev)

        if(color === 4){
          setCircle(prev=>'50%')
        }   
      })

    }, 500);
    return () => clearInterval(interval);
  
  
  }, [color])

  return (
    <div className="App">
      <div style={{width:"200px", height:'200px',backgroundColor:colArr[color],borderRadius:circle}}></div>
    </div>
  );
}

export default App;