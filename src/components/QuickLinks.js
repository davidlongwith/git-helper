import React from "react";

// sectionName prop for jump link name,
// and is formatted to match section id's for link destination
const QuickLinks = ({ sectionName }) => (
  <li>
    <a
      className="quick-link"
      href={`#${sectionName.toLowerCase().replace(/ /g, "-")}`}
    >
      {sectionName}
    </a>
  </li>
);

export default QuickLinks;
