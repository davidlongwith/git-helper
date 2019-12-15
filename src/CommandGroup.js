import React from "react";

const CommandGroup = ({ name, commands }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")} className="command-group">
    <h1>{name}</h1>
    <div>
      {commands.map((command, i) => (
        <div key={i}>
          <code>{command.code}</code>
          <p>{command.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CommandGroup;
