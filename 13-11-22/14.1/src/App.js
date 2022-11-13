import { useEffect, useState } from 'react';
import axios from 'axios';


function Box() {
  const [joke, setJoke] = useState('');

  const fetchData = async (string) => {
    const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?category=${string}`);
    setJoke(data.value);
  };
  useEffect(() => {
    fetchData();
    //   .then((data) => {
    //     setQ1(data.data[0].question);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  return (
    <div>
      <button onClick={(e)=> {fetchData(e.target.innerText)}}>animal</button>
      <button onClick={(e)=> {fetchData(e.target.innerText)}}>career</button>
      <button onClick={(e)=> {fetchData(e.target.innerText)}}>celebrity</button>
      <button onClick={(e)=> {fetchData(e.target.innerText)}}>dev</button>
      <button onClick={(e)=> {fetchData(e.target.innerText)}}>food</button>
      {joke && <h3>{joke}</h3>}
      {!joke && <h3>spinner - waiting for your choice</h3>}
    </div>
  );
}

export default Box;
