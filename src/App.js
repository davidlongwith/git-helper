import React from "react";
import "./App.css";
import "./QuickLinks.css";
import QuickLinks from "./components/QuickLinks.js";
import CommandGroup from "./components/CommandGroup.js";
import PropTypes from "prop-types";

// The commandData prop contains the entire data array from commands.json
function App({ commandData }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>

      {/*
        Iterate through each object in the commandData array assigning each 
        command group's name as a prop for the QuickLinks component.
       */}
      <nav id="quick-link-navigation">
        <ul>
          {commandData.map((commandGroup, i) => (
            <QuickLinks key={i} sectionName={commandGroup.name} />
          ))}
        </ul>
      </nav>

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

// Typechecking with PropTypes
App.propTypes = {
  commandData: PropTypes.array
};

export default App;
