import React from "react";
import { january } from "./data.js";
const Birthday = () => {
  return (
    <div>
      {january.map((person) => {
        const { name, department, image, birthday } = person;
        return (
          <div className='person'>
            <img src={image} alt='' />
            <h1>{name}</h1>
            <h2>{department}</h2>
            <h1 className='date'>{birthday}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Birthday;
