import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
  ];
const arrOfNames = (arr) => {
  let arr2 = arr.map(person => person.name);
  console.log(arr2);
  return arr2
}
// arrOfNames(data)

const before1990 = (arr) => {
  let arr2 =[]
   arr.forEach(element => {

    let test = element.birthday.split("-")

    if (parseInt(test[2])<1990) {
      arr2.push(element)
    }
  
   });
  

  console.log(arr2);
  return arr2
}
// before1990(data)


// let test;
// let arr3=[]
// data.forEach(element => {

//   test = element.birthday.split("-")

//  if (parseInt(test[2])<1990) {
//    arr3.push(element)
//  }
// })

//   console.log(arr3);


function App() {     
  
//   let arrToJsx = arr3.map((e)=> {
// // console.log(e.name);
//   return <div><h3>{e.name}</h3></div>

// })

// console.log(arrOfNames(data));
let arrToJsx = arrOfNames(data).map((e)=> {
return (<div><h3>{e}</h3></div>)
})
// console.log(arrToJsx);


return (
<div>
  {before1990(data).map ((e)=> {
return <Card myClass={'card'} name={e.name} birthday={e.birthday} favMeats={e.favoriteFoods.meats.join(' ')} favFishes={e.favoriteFoods.fish.join(' ')}/>

  })}
</div>
)
  
}

export default App;
