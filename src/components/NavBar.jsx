import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';
export const NavBar = () =>(
<Navbar bg="primary" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#">Inicio</Nav.Link>
    <Nav.Link href="#">Productos</Nav.Link>
    <Nav.Link href="#">Contacto</Nav.Link>
  </Nav>
  <CartWidget/>
</Container>
</Navbar>
);