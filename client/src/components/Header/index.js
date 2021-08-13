// Lets start with Link basic header
// We have to import react
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: "none", paddingBottom: "1.5%", paddingTop: "1.5%"}}>
        <Container>
          <Navbar.Brand href="#home" style={{ marginRight: "25%"}}>Traders View</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <NavDropdown title="Markets" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Stocks</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Forex
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Cryptos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/signup">Sign up</Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

// Export the header
export default Header;
