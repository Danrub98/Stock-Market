// Lets start with Link basic header
// We have to import react
import React from "react";
import { Link } from "react-router-dom";

import Forest from "./forest.jpg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundImage:  `url(${Forest})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Andres Plasencia Borja
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                About
              </Link>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Export the header
export default Header;
