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
            <div>
              {commandGroup.commands.map((command, i) => (
                <div key={i}>
                  <code>{command.code}</code>
                  <p>{command.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
