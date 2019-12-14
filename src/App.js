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
            <p key={i}>{commandGroup.section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
