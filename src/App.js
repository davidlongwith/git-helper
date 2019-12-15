import React from "react";
import "./App.css";

function App({ commandData }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
      </header>
      <div className="commands">
        {commandData.map((commandGroup, i) => (
          <section
            id={commandGroup.name.toLowerCase().replace(/ /g, "-")}
            className="command-group"
            key={i}
          >
            <h1>{commandGroup.name}</h1>
            <div>
              {commandGroup.commands.map((command, i) => (
                <div key={i}>
                  <code>{command.code}</code>
                  <p>{command.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
