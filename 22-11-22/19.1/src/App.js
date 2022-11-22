import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GrandFather from "./components/GrandFather";

export const myContext = createContext();
function App() {
  const [gift, setGift] = useState([]);

  return (
    <myContext.Provider value={{ gift, setGift }}>
      im calling to GrandFather : <GrandFather />
    </myContext.Provider>
  );
}

export default App;
