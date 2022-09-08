import React from "react";

const People = ({ current }) => {
  console.log(current);
  return (
    <div>
      <h2>{current.name}</h2>
      <h3>Height: {current.height} cm</h3>
      <h3>Mass: {current.mass} kg</h3>
      <h3>Hair Color: {current.hair_color}</h3>
      <h3>Skin Color: {current.skin_color}</h3>
    </div>
  );
};

export default People;
