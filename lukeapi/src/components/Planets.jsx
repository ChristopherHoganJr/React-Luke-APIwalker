import React from "react";

const Planets = ({ current }) => {
  return (
    <div>
      <h2>{current.name}</h2>
      <h3>Climate: {current.climate}</h3>
      <h3>Terrain: {current.terrain}</h3>
      <h3>Surface WAter: {current.surface_water}</h3>
      <h3>Population: {current.population}</h3>
    </div>
  );
};

export default Planets;
