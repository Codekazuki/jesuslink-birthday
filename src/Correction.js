import List from "./List";
import "./correction.css";
import { july } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(july);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays this month of July</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default Correction;
