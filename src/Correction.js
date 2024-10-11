import List from "./List";
import "./correction.css";
import { october } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(october);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month of October</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
