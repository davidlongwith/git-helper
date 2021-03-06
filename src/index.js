import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import data from "./data/commands";
import * as serviceWorker from "./serviceWorker";

// Add commands.json data to the App component as prop
ReactDOM.render(
  <App commandsByGroupArray={data} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
