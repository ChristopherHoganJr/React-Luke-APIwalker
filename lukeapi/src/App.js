import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import People from "./components/People";
import Planets from "./components/Planets";
import Form from "./components/Form";

function App() {
  // UseNavigate
  const navigate = useNavigate();
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
  const newRequest = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/${type}/${itemId}/`)
      .then((response) => {
        setCurrent(response.data);
      })
      .catch((error) => {
        navigate("/error");
      });
    type == "planets"
      ? navigate(`/planets/${itemId}`)
      : navigate(`/people/${itemId}`);
  };

  return (
    <div className="App">
      <Form
        selectType={selectType}
        type={type}
        itemId={itemId}
        idSelect={idSelect}
        newRequest={newRequest}
      />
      <Routes>
        <Route path="/people/:id" element={<People current={current} />} />
        <Route path="/planets/:id" element={<Planets current={current} />} />
        <Route
          path="/error"
          element={
            <>
              <img
                src="https://i.pinimg.com/736x/15/39/b1/1539b143afdd1ade6bf920d5440a3166--starwars-victoria.jpg"
                alt="These arent the droids you're looking for"
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
