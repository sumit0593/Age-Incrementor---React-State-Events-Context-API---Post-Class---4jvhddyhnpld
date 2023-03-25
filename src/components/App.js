import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const App = () => {
  const [age, setAge] = useState(28);

  function incrementAge() {
    setAge(age + 1);
  }

  return (
    <>
      <Child age={age} incrementAge={incrementAge} />
    </>
  );
};

export default App;
