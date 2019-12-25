import React from "react";
import "./App.css";
import QuickLinks from "./components/QuickLinks.js";
import CommandGroup from "./components/CommandGroup.js";

// The commandData prop contains the entire data array from commands.json
function App({ commandData }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>

      {/*
        Iterate through each object in the commandData array assigning each command group's
        section name as a prop for the QuickLinks component.
       */}
      <div id="quick-links-container">
        {commandData.map((commandGroup, i) => (
          <QuickLinks key={i} sectionName={commandGroup.name} />
        ))}
      </div>

      {/*
        Iterate through each object in the commandData array for use in the
        CommandGroup component.  For each iteration, all properties of the object
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
