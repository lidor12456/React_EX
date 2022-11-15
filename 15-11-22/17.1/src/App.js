import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import List from "./components/List";
import axios from "axios";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const getData = async () => {
    const response = await axios.get(
      "https://63737d12348e9472990dd266.mockapi.io/Tasks"
    );
    let myData = response.data;
    return myData;
  };

  useEffect(async () => {
    console.log(await getData());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
    } else {
      const NewItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, NewItem]);
      setName("");
    }
  };
  const removeItem = (id) => {
    setList(
      list.filter((item) => {
        console.log(item.id);
        return item.id !== id;
      })
    );
  };
  const editItem = (id) => {
    const editTheItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(editTheItem.title);
  };
  //   const incomplete = (id) => {
  //     const editTheItem = list.find((item) => item.id === id);
  //     setIsEditing(true);
  //     setEditId(id);
  //     setName((editTheItem.title = "incomplete"));
  //   };
  const clearList = () => {
    setList([]);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          ToDo List With Local Storage
        </h3>
        <div className="">
          <input
            type="text"
            className=""
            placeholder="Your New Task"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <List
            items={list}
            removeItem={removeItem}
            editItem={editItem}
            // incomplete={incomplete}
          />
          <div className="">
            <button className="" onClick={clearList}>
              Clear Items
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
