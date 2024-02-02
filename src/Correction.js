import List from "./List";
import "./correction.css";
import { february } from "./data";
import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(february);

  return (
    <section className='container'>
      <h3>{people.length} birthdays this month</h3>
      <List people={people} />
    </section>
  );
};

export default Correction;
