import React from "react";
import "./App.css";
import AirlineImages from "./AirlineImages";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <h1>Airline Images App</h1>
      <Login />
      <AirlineImages />
    </div>
  );
}

export default App;