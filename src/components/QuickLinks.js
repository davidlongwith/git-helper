import React from "react";

// convert sectionName prop to id format for jump link
const QuickLinks = ({ sectionName }) => (
  <div className="quick-links-div">
    <a
      className="quick-link"
      href={`#${sectionName.toLowerCase().replace(/ /g, "-")}`}
    >
      {sectionName}
    </a>
  </div>
);

export default QuickLinks;
