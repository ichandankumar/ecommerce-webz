import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
   <Container>
        <Nav className=" justify-content-center"  >
                <Navbar.Brand href="/">Home</Navbar.Brand>

          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link className="ml-3" href="/about">About</Nav.Link>

         
        </Nav>
      
        <Nav>
        <Button> Cart</Button>
        </Nav>
  </Container>
    </Navbar>
  );
}

export default AppNavbar;
