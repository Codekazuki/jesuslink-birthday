import React from "react";
import { june } from "./data.js";
const Birthday = () => {
  return (
    <div>
      {may.map((person) => {
        const { name, department, image, birthday, id } = person;
        return (
          <div key={id} className='person'>
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
