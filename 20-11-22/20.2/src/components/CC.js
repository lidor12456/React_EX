import React from "react";
import { Component } from "react";
// import "./style.css";

class TodoList extends Component {
  state = {
    items: [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ],
  };

  toggleDone = (todo) =>
    this.setState({
      items: this.state.items.map((item) =>
        item.name === todo.name ? { ...item, completed: !item.completed } : item
      ),
    });

  todoRows = () =>
    this.state.items.map((item) => {
      return (
        <tr key={item.name}>
          <td
            style={{ textDecoration: item.completed ? "line-through" : null }}
          >
            {item.name}{" "}
          </td>
          <td>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => this.toggleDone(item)}
            />
          </td>
        </tr>
      );
    });

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody> {this.todoRows()} </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
