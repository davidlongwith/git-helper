import React from "react";
import "../css/QuickLinks.css";
import QuickLink from "./QuickLink.js";
import PropTypes from "prop-types";

// Iterate through each object in the sections prop assigning each
// section's name as a prop for the QuickLink component.
const QuickLinks = ({ sections }) => (
  <nav id="quick-link-navigation">
    <h2 className="quicklinks-header">QuickLinks</h2>
    <ul>
      {sections.map((section, i) => (
        <QuickLink key={i} sectionName={section.name} />
      ))}
    </ul>
  </nav>
);

// Typechecking with PropTypes
QuickLinks.propTypes = {
  sections: PropTypes.array
};

export default QuickLinks;
