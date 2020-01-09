import React from "react";
import "./App.css";
import "./QuickLinks.css";
import "./ScrollToTop.css";
import Header from "./components/Header.js";
import QuickLinks from "./components/QuickLinks.js";
import Commands from "./components/Commands.js";
import ScrollToTop from "./components/ScrollToTop.js";
import PropTypes from "prop-types";

// The commandsByGroupArray prop contains the entire data array from commands.json
function App({ commandsByGroupArray }) {
  return (
    <div className="app">
      <Header />
      <QuickLinks sections={commandsByGroupArray} />
      <Commands commandData={commandsByGroupArray} />
      <ScrollToTop />
    </div>
  );
}

// Typechecking with PropTypes
App.propTypes = {
  commandsByGroupArray: PropTypes.array
};

export default App;
