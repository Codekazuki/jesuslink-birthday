import "./correction.css";
import { february } from "./data";
import React, { useState } from "react";

const Correction = () => {
  const [people, setPaople] = useState(february);
  console.log(people);
  return <div>Correction</div>;
};

export default Correction;
