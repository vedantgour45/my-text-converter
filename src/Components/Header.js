import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                onClick={props.toggleMode}
                type="checkbox"
                className="checkbox"
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.prototypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Set title",
  aboutText: "Set aboutText",
};

export default Header;
