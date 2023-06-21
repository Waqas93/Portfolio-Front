import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "#0d6efd" }}>
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/#about" className="cursor-pointer text-white px-2 py-1  font-semibold uppercase hover:bg-yellow-500">About</Nav.Link>
            <Nav.Link href="/#services" className="cursor-pointer text-white px-2 py-1  font-semibold uppercase hover:bg-yellow-500">Services</Nav.Link>
            <Nav.Link href="/#portfolio" className="cursor-pointer text-white px-2 py-1  font-semibold uppercase hover:bg-yellow-500">Portfolio</Nav.Link>
            <Nav.Link href="/#work" className="cursor-pointer px-2 text-white py-1  font-semibold uppercase hover:bg-yellow-500">Work</Nav.Link>            <Nav.Link href="/#contact" className="cursor-pointer text-white px-2 py-1  font-semibold uppercase hover:bg-yellow-500">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
