import React,{useContext} from 'react'
import { myContext } from '../App';

function GrandSon() {
  const {gift,setGift} = useContext(myContext);
  return (
    <div>my toys is {gift[0]}</div>
  )
}

export default GrandSon