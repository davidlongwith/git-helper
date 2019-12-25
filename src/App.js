import React from "react";
import "./App.css";
import CommandLinks from "./components/CommandLinks.js";
import CommandGroup from "./components/CommandGroup.js";

// The commandData prop contains the entire data array from commands.json
function App({ commandData }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>

      <div className="quick-links">
        {commandData.map((commandLinks, i) => (
          <CommandLinks key={i} {...commandLinks} />
        ))}
      </div>

      {/*
        Iterate through each object in the commandData array for use in the
        CommandGroup component.  For each iteration, the properties of the object
        are added as props using the JSX spread operator.
       */}
      <div className="commands">
        {commandData.map((commandGroup, i) => (
          <CommandGroup key={i} {...commandGroup} />
        ))}
      </div>
    </div>
  );
}

export default App;
