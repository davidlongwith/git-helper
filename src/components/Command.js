import React from "react";

const Command = ({ code, description }) => (
  <div className="command">
    <code>{code}</code>
    <p>{description}</p>
  </div>
);

export default Command;
