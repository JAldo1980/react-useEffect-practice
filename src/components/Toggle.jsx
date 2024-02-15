import React from "react";

const Toggle = ({ handleToggle, toggleSwitch }) => {
  return (
    <>
      <div className="toggle-container" onClick={handleToggle}>
        {toggleSwitch ? "🌙" : "☀️"}
      </div>
    </>
  );
};

export default Toggle;
