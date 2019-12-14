import React from "react";
import "./App.css";

function App({ commands }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>App Header</p>
      </header>
      <ul>
        {commands.map((command, i) => (
          <li key={i}>{command.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
