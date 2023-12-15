import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWidget from "../CardWidgetComponent/CardWidgetComponent";

import { Link } from "react-router-dom";

import "./NavBarComponent.css";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand
          href="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Tienda River
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link
                  to={"/category/camisetas"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Camisetas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  to={"/category/shorts"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shorts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  to={"/category/buzos"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Buzos
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  to={"/category/pantalones"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Pantalones
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link
                  to={"/category/zapatillas"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Zapatillas
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CardWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
