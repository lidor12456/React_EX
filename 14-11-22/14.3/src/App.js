import React from 'react';
import {useState,useEffect} from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import {ourProducts} from './store.js'

function Homepage () {
  return (
    <div>
      <h1>Homepage </h1>
      <Link to='/products'>products</Link>
    </div>
  );
}
function Header () {
  return(
  <div>
   <h4>Header </h4>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>

   </div>
  )
}
function E404() {
  return <h1>404</h1>;
}

function Products () {
    const [products,setProducts] = useState(ourProducts)
         let test = products.map((e)=> {
        return (
            <div><Link to={`/products/${e.title}`}>{e.title}</Link></div>
        )
          })
    
    return (
    <div>
      
      <h1>Products </h1>

   <div>{test}</div> 
    <Link to='/'>Back</Link>

    </div>
  );
}
function SpecificProduct() {
  const params = useParams();
  const displayData = () => {

    return (
      <>
        <h1>SpecificProduct</h1>
        <h1>{params.product}</h1>
      </>
    );
  };
  return <div>{displayData()}</div>;
}

function App() {
  return (
    <div>
      <Header  />
      <Routes>
        <Route path='/' element={<Homepage  />} />
        <Route path='/products' element={<Products  />} />
        <Route path='/products/:product' element={<SpecificProduct />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
