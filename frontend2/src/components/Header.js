import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Container fluid>
        <div style={{ height: "60px" }} />
        <Navbar
          bg="primary"
          variant="dark"
          fixed="top"
          position="sticky"
          top="0"
        >
          <Container>
            <img
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Brand href="/">
              <h4>Fraxure</h4>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">
                <h4>Home</h4>
              </Nav.Link>
              <Nav.Link href="/about">
                <h4>About</h4>
              </Nav.Link>
              <Nav.Link href="/search">
                <h4>Search</h4>
              </Nav.Link>
              <Nav.Link href="/results">
                <h4>Results</h4>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
