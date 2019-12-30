import React from "react";
import PropTypes from "prop-types";

// assemble a single command using Command component props
const Command = ({ code, description }) => (
  <div className="command">
    <div className="command-code">
      <code>{code}</code>
    </div>
    <div className="command-descrip">
      <p>{description}</p>
    </div>
  </div>
);

// Typechecking with PropTypes
Command.propTypes = {
  code: PropTypes.string,
  description: PropTypes.string
};

export default Command;
