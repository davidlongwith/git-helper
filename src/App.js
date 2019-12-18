import React from "react";
import "./App.css";
import CommandGroup from "./components/CommandGroup.js";

function App({ commandData }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>
      <div className="commands">
        {commandData.map((commandGroup, i) => (
          <CommandGroup key={i} {...commandGroup} />
        ))}
      </div>
    </div>
  );
}

export default App;
