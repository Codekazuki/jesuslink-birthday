import React from "react";

const Person = ({ image, birthday, department, contact, name }) => {
  return (
    <article className='person'>
      <img src={image} className='img' alt={name} />
      <h4>{name}</h4>
      <h4>{birthday}</h4>
      <p>{department}</p>
      <h1>{contact}</h1>
    </article>
  );
};

export default Person;
