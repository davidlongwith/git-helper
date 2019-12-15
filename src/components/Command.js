import React from "react";

const Command = ({ code, description }) => (
  <div>
    <code>{code}</code>
    <p>{description}</p>
  </div>
);

export default Command;
