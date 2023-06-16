import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo2.svg';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#7B9899' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt={'Logo'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ backgroundColor: '#7B9899' }}>
            <Nav.Link href="#home" style={{ fontWeight: 'bold' }}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Coming Soon"
              id="basic-nav-dropdown"
              style={{ fontWeight: 'bold', backgroundColor: '#7B9899' }}
            >
              <NavDropdown.Item
                href="#action/3.1"
                style={{ fontWeight: 'bold' }}
              >
                About Me
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Portfolio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Porfolio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
