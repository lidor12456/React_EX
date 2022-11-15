import React from "react";

function List({ items, removeItem, editItem, incomplete }) {
  return (
    <div className="container">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <ul className="" key={id}>
            <li className="">
              {title}
              <div style={{ float: "right" }}>
                <button type="button" className="" onClick={() => editItem(id)}>
                  edit
                </button>
                {/* <button
                  type="button"
                  className=""
                  onClick={() => incomplete(id)}
                >
                  incomplete
                </button> */}

                <button
                  type="button"
                  className=""
                  onClick={() => removeItem(id)}
                >
                  remove
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default List;
