import React,{useContext, useEffect} from 'react'
import Son from './Son'
import { myContext } from '../App';

function Father() {
  const {gift,setGift} = useContext(myContext);
  useEffect(() => {
    setGift(["CAR"])
  },[]);
  // const ctx = myContext;

  console.log(gift);


  
  return (
    <div>
      {/* {console.log(gift)} */}
       im calling to Son : <Son/>
    </div>
  )
}

export default Father