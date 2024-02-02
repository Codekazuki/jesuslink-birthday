import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return <Person key={id} {...person} />;
      })}
    </section>
  );
};

export default List;
