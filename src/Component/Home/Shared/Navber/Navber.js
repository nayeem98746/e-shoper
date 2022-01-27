import React from 'react';
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navber.css'

function Navber() {
  return <div>      <>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/home" className='categories' >  <h4>CATEGORIES</h4>   </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='info-bar' >
          <Nav.Link className='link-style' as={Link} to="/home"><h5 style={{
            color: 'white'
          }} >Home</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Product</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Service</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Shop</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Pages</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Blog</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 style={{ color: 'white' }} >Contact Us</h5></Nav.Link>






        </Navbar.Collapse>

      </Container>
    </Navbar>

  </></div>;
}

export default Navber;
