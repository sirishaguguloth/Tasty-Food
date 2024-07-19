import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.removeItem("userlogin");
    return navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='logo'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className={`${menuOpen ? 'show' : ''}`}>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          </Nav>
          <ul className='navlists'>
            <li className='listitems'><Link to={'/'} className='links'>Home</Link></li>
            <li className='listitems'><Link to={'/menu'} className='links'>Menu</Link></li>
            <li className='listitems'><Link to={'/contact'} className='links'>Contact</Link></li>
            <li className='listitems'><Link to={'/cart'} className='links'>Cart</Link></li>
            <li className='listitems'><Link to={'/order'} className='links'>Order</Link></li>
            <li className='listitems'><button className='navaction' onClick={logout}>Logout</button></li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
