import List from "./List";
import "./correction.css";
import { may } from "./data";

import React, { useState } from "react";

const Correction = () => {
  const [people, setPeople] = useState(may);

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
