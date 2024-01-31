import React from "react";
import data from "./data.js";
const Birthday = () => {
  return (
    <div>
      {data.map((person) => {
        const { name, department, image } = person;
        return (
          <div>
            <img src={image} alt='' />
            <h1>{name}</h1>
            <h2>{department}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Birthday;
