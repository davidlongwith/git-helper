import React from "react";
import "./App.css";
import "./QuickLinks.css";
import QuickLinks from "./components/QuickLinks.js";
import CommandGroup from "./components/CommandGroup.js";
import PropTypes from "prop-types";

// The commandsByGroupArray prop contains the entire data array from commands.json
function App({ commandsByGroupArray }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>

      <QuickLinks commandGroups={commandsByGroupArray} />

      {/*
        Iterate through each object in the commandData array for use in the
        CommandGroup component.  For each iteration, all properties of the object
        are added as props using the JSX spread operator.
       */}
      <div className="commands">
        {commandsByGroupArray.map((commandGroup, i) => (
          <CommandGroup key={i} {...commandGroup} />
        ))}
      </div>
    </div>
  );
}

// Typechecking with PropTypes
App.propTypes = {
  commandsByGroupArray: PropTypes.array
};

export default App;
