import React from "react";

const ButtonScrollTop = () => (
  <div className="scroll-top-button-div">
    <button className="scroll-top-button">
      <i className="i-arrow-up">
        <svg
          role="img"
          aria-labelledby="arrowUpIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.77 25.39"
        >
          <title id="arrowUpIcon">arrow-up</title>
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M47.77,25.39a1,1,0,0,1-.71-.29L24.39,2.41,1.71,25.09A1,1,0,0,1,.29,23.68L23.68.29a1,1,0,0,1,1.41,0L48.48,23.68a1,1,0,0,1-.71,1.71Z"></path>
            </g>
          </g>
        </svg>
      </i>
    </button>
  </div>
);

export default ButtonScrollTop;
