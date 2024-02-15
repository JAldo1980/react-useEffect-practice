import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  useEffect(() => {
    document.body.className = toggleSwitch ? "light-mode" : "dark-mode";
  }, [toggleSwitch]);

  function handleToggle() {
    setToggleSwitch((prevToggle) => !prevToggle);
  }

  return (
    <>
      <Container>
        <Toggle handleToggle={handleToggle} toggleSwitch={toggleSwitch} />
        <h1>TEST</h1>
      </Container>
    </>
  );
}

export default App;
