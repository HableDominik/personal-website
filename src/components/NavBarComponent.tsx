import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function NavBarComponent() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-1">
      <Container>
        <Navbar.Brand href="/home">Freiwaldcup 2023</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/links">Unterlagen</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/encounters">Begegnungen</Nav.Link>
              <Nav.Link as={Link} to="/players">Spielerliste</Nav.Link>
              <Button
                variant="outline-danger"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="outline-success"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default NavBarComponent;