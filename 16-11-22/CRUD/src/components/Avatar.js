import React from "react";

function Avatar({ data }) {
  return (
    <div style={{ width: "150px" }}>
      <h2>
        name:<br></br> {data.title}
      </h2>

      <img src={data.img} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
}

export default Avatar;
