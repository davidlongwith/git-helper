import React from "react";
import Command from "./Command.js";

const CommandGroup = ({ name, commands }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")} className="command-group">
    <h1>{name}</h1>
    <div>
      {commands.map((command, i) => (
        <Command key={i} {...command} />
      ))}
    </div>
  </section>
);

export default CommandGroup;
