// Import dependencies
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer>
      <Navbar  xpand="lg"  style={{ backgroundColor: "none"}}>
        <Container>
          <Navbar.Brand href="#home" className="text-center">All rights reserved</Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

// Export the footer
export default Footer;
