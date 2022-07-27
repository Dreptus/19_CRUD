import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="rounded mt-4 mb-4">
        <Container>
          <Nav.Link as={NavLink} to="/">
            <NavbarBrand>Blog app</NavbarBrand>
          </Nav.Link>
          <NavbarCollapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
