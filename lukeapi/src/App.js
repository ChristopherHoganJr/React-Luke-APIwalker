import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import People from "./components/People";
import Planets from "./components/Planets";
import Form from "./components/Form";

function App() {
  // App States
  const [current, setCurrent] = useState({});
  const [type, setType] = useState("people");
  const [itemId, setItemId] = useState(0);

  // Select People or Planets
  const selectType = (newType) => {
    setType(newType);
  };

  // Select ID for API
  const idSelect = (newID) => {
    setItemId(newID);
  };

  // Grabs the API information with new information
  const newRequest = () => {
    axios.get(`https://swapi.dev/api/${type}/${itemId}/`).then((response) => {
      setCurrent(response.data);
    });
  };

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/${type}/${itemId}/`).then((response) => {
  //     setCurrent(response.data);
  //   });
  // }, []);

  return (
    <div className='App'>
      <Form
        selectType={selectType}
        type={type}
        itemId={itemId}
        idSelect={idSelect}
        newRequest={newRequest}
      />
      <Routes>
        <Route
          path='/people/:id'
          element={<People current={current} setItemId={setItemId} />}
        />
        <Route path='/planets/:id' element={<Planets current={current} />} />
      </Routes>
    </div>
  );
}

export default App;
