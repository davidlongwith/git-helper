import React from "react";
import Command from "./Command.js";

// Each section of commands has a name/title and array of commands passed as props
const CommandGroup = ({ name, commands }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")} className="command-group">
    <h2>{name}</h2>

    {/*
      Iterate through each command in the commands array, adding the properties of each
      as props to Command component using the JSX spread operator.
    */}
    <div>
      {commands.map((command, i) => (
        <Command key={i} {...command} />
      ))}
    </div>
  </section>
);

export default CommandGroup;
