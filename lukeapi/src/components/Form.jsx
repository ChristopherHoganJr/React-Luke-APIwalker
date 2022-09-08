import React from "react";

const Form = (props) => {
  // Search Types
  const searchTypes = ["people", "planets"];

  return (
    <div>
      {/* <form onSubmit={submitHandler}> */}
      <label>Search for:</label>
      <select
        value={props.type}
        onChange={(e) => props.selectType(e.target.value)}>
        {searchTypes.map((searchType, idx) => (
          <option key={idx} value={searchType}>
            {searchType}
          </option>
        ))}
      </select>
      <label>ID:</label>
      <input
        type='number'
        value={props.itemId}
        onChange={(e) => props.idSelect(e.target.value)}
      />
      <button onClick={props.newRequest}>Search</button>
      {/* </form> */}
    </div>
  );
};

export default Form;
