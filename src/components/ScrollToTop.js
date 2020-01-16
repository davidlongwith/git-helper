import React, { Component } from "react";
import "../css/ScrollToTop.css";

// Button that scrolls to top of page.
//
// Code assist:
// https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
//
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-top-button-div">
        {is_visible && (
          <button
            className="scroll-top-button"
            onClick={() => this.scrollToTop()}
          >
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
        )}
      </div>
    );
  }
}
