import React from "react";

// convert sectionName prop to id format for jump link
const QuickLinks = ({ sectionName }) => (
  <div>
    <a href={`#${sectionName.toLowerCase().replace(/ /g, "-")}`}>
      {sectionName}
    </a>
  </div>
);

export default QuickLinks;
