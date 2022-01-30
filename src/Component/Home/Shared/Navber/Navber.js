import React from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import logo from '../../../../Images/logo (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUserCircle  } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../../hook/useFirebase';


function Navber() {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const icon =<FontAwesomeIcon icon={faUserCircle} />
  const cartLength = useSelector( state => state.products.cartProduct)
  const { user, logOut } = useFirebase();


  return <>
    <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home"><img src={logo} alt="" /></NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className=''>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h6 >Home</h6></Nav.Link>
          <HashLink className='link-style' style={{textDecoration:'none'}} smooth to="/#shop-container"><h6>Shop</h6></HashLink>
          <Nav.Link className='link-style' as={Link} to="/"><h6>Blog</h6></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h6>Contact Us</h6></Nav.Link>
          <Nav.Link className='link-style cart-button' as={Link} to="/cart"><h6>{cartLength.length}{element}</h6></Nav.Link>
          <a>
            {
              user ? <>{user.displayName} {icon} <Button onClick={ logOut }>Logout</Button> </>  : <Nav.Link className='link-style' as={Link} to="/login"><Button>Login</Button></Nav.Link>
            }
            
          </a>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default Navber;
