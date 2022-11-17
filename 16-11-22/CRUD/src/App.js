import { React, useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Avatars from "./components/Avatars";
import axios from "axios";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function AddAvatar() {
  return (
    <div>
      AddAvatar
      <Link to="/">Home</Link>
    </div>
  );
}

function Homepage() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [avatarsArr, setAvatarsArr] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const destructData = (data) => {
    return data.map((task) => {
      return {
        title: task.title,
        description: task.description,
        img: task.pic,
      };
    });
  };

  useEffect(() => {
    axios
      .get("https://63737d12348e9472990dd266.mockapi.io/Tasks")
      .then(({ data }) => {
        setIsLoading(true);
        setAvatarsArr(destructData(data));
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  }, []);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  //   const getData = async () => {
  //     const response = await axios.get(
  //       "https://63737d12348e9472990dd266.mockapi.io/Tasks"
  //     );
  //     let myData = response.data;
  //     console.log(myData);
  //     return myData;
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const test = async (data) => {
  //     data = await data;
  //     data.map((e) => {
  //       console.log(e.title);
  //     });
  //   };
  //   test(getData());

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

  const clearList = () => {
    setList([]);
  };

  return (
    <div>
      <div>
        <Link to="/addavatar">Add Avatar</Link>

        <input value={inputValue} onChange={handleInput} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
            gap: `1rem`,
            marginBottom: "1rem",
          }}
        >
          {!isLoading ? (
            <h1>Spinner</h1>
          ) : (
            <Avatars avatarsArr={avatarsArr} inputValue={inputValue} />
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Link to="/homepage">Home</Link>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/addavatar" element={<AddAvatar />} />
      </Routes>
    </div>
  );
}

export default App;
