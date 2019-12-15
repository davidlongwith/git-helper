import React from "react";
import "./App.css";
import CommandGroup from "./CommandGroup.js";

function App({ commandData }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
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
