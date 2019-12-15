import React from "react";
import "./App.css";

function App({ commands }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
      </header>
      <div className="Main">
        {commands.map((commandGroup, i) => (
          <div>
            <h1 key={i}>{commandGroup.section}</h1>
            <ul>
              {commandGroup.commands.map((command, i) => (
                <li key={i}>{command.code}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
