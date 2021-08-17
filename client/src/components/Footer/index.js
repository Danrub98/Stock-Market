// Import dependencies
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer>
      <Navbar  xpand="lg" fixed="bottom" bg="dark" variant="dark" style={{ backgroundColor: "#D9E4EC"}}>
        <Container>
          <Navbar.Brand href="#home" className="text-center">All rights reserved</Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

// Export the footer
export default Footer;
