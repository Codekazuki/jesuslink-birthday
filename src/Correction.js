import List from "./List";
import "./correction.css";
import { august } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(august);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month of August</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
