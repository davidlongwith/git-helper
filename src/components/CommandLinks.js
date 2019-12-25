import React from "react";

//
const CommandLinks = ({ name }) => (
  <div>
    <a href={`#${name.toLowerCase().replace(/ /g, "-")}`}>{name}</a>
  </div>
);

export default CommandLinks;
