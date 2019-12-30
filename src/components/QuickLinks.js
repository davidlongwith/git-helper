import React from "react";
import QuickLink from "./QuickLink.js";
import PropTypes from "prop-types";

// Iterate through each object in the commandGroups prop assigning the
// command group's name as a prop for the QuickLink component.
const QuickLinks = ({ commandGroups }) => (
  <nav id="quick-link-navigation">
    <ul>
      {commandGroups.map((commandGroup, i) => (
        <QuickLink key={i} sectionName={commandGroup.name} />
      ))}
    </ul>
  </nav>
);

// Typechecking with PropTypes
QuickLinks.propTypes = {
  commandGroups: PropTypes.array
};

export default QuickLinks;
