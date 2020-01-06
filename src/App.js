import React from "react";
import "./App.css";
import "./QuickLinks.css";
import "./ButtonScrollTop.css";
import QuickLinks from "./components/QuickLinks.js";
import Commands from "./components/Commands.js";
import ButtonScrollTop from "./components/ButtonScrollTop.js";
import PropTypes from "prop-types";

// The commandsByGroupArray prop contains the entire data array from commands.json
function App({ commandsByGroupArray }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Git Helper</h1>
      </header>
      <QuickLinks sections={commandsByGroupArray} />
      <Commands commandData={commandsByGroupArray} />
      <ButtonScrollTop />
    </div>
  );
}

// Typechecking with PropTypes
App.propTypes = {
  commandsByGroupArray: PropTypes.array
};

export default App;
