import React from "react";
import PropTypes from "prop-types";

// sectionName prop is used for the Quick Link name,
// and is formatted to match section id's for link destination
const QuickLink = ({ sectionName }) => (
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
QuickLink.propTypes = {
  sectionName: PropTypes.string
};

export default QuickLink;
