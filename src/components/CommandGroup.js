import React from "react";
import Command from "./Command.js";
import PropTypes from "prop-types";

// Each command group gets a unique id based on group name.  Add all properties
// for individual commands to the Command component using the JSX spread operator.
const CommandGroup = ({ name, commands }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")} className="command-group">
    <h2>{name}</h2>
    <div>
      {commands.map((command, i) => (
        <Command key={i} {...command} />
      ))}
    </div>
  </section>
);

// Typechecking with PropTypes
CommandGroup.propTypes = {
  name: PropTypes.string,
  commands: PropTypes.array
};

export default CommandGroup;
