import React from "react";
import "./App.css";
import { DigitalClock } from "./components/DigitalClock";
import { AnalogClock } from "./components/AnalogClock";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <AnalogClock />
      </div>
      <div className="container">
        <DigitalClock />
      </div>
    </div>
  );
};

export default App;
