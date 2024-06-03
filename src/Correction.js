import List from "./List";
import "./correction.css";
import { june } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(june);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month of June</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
