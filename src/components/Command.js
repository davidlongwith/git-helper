import React from "react";

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

export default Command;
