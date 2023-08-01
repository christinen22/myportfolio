import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle onClick={handleToggle} aria-controls="navbarHome" />

        <Navbar.Collapse
          id="navbarHome"
          className={`${isActive ? "show" : ""}`}
        >
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
