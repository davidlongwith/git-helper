import React from "react";
import CommandGroup from "./CommandGroup.js";
import PropTypes from "prop-types";

// Iterate through each object in the commandData array for use in the
// CommandGroup component.  For each iteration, all properties of the object
// are added as props using the JSX spread operator.
const Commands = ({ commandData }) => (
  <div className="commands">
    {commandData.map((commandGroup, i) => (
      <CommandGroup key={i} {...commandGroup} />
    ))}
  </div>
);

// Typechecking with PropTypes
Commands.propTypes = {
  commandData: PropTypes.array
};

export default Commands;
