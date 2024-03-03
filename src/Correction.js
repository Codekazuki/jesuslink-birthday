import List from "./List";
import "./correction.css";
import { march } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(march);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
