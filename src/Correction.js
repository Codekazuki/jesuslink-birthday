import List from "./List";
import "./correction.css";
import { april } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(april);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month of April</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
