import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DummyComponent from "./DummyComponent";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Dummy Trying To Typescript 🤪
      <DummyComponent name="DumDum" age="one hundred and twenty" />
    </header>
  </div>
);

export default App;
