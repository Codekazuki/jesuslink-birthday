import React from "react";

const Person = ({ image, birthday, department, contact, name }) => {
  return (
    <article className='person'>
      <img src={image} className='img' alt={name} />
      <h3>{name}</h3>
      <p>{department}</p>
      <h4>{birthday}</h4>
      <h4>{contact}</h4>
    </article>
  );
};

export default Person;
