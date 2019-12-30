import React from "react";
import PropTypes from "prop-types";

// sectionName prop used for jump link name,
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

// Typechecking with PropTypes
QuickLinks.propTypes = {
  sectionName: PropTypes.string
};

export default QuickLinks;
