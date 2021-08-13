// Import dependencies
import React from "react";

import Github from "./github.png";
import Linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <footer className = "flex-shrink-0 py-4">
      <nav className="navbar fixed-bottom navbar-light">
        <div className="container">
          <a href="https://www.linkedin.com/in/andr%C3%A9s-plasencia-borja-120a35ba/">
            <img src={Linkedin} alt="linkedin" width="30" />
          </a>
          <a  href="https://github.com/ANDRESPLASENCIABORJA">
            <img src={Github} alt="linkedin" width="30" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

// Export the footer
export default Footer;
