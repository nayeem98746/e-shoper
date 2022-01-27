import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faHardHat, faUserCircle , faSearch } from '@fortawesome/free-solid-svg-icons';


import './Header.css'
import logo from '../../../../Images/logo (1).png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const hart = <FontAwesomeIcon icon={faHardHat} />
    const user =<FontAwesomeIcon icon={faUserCircle} />
    const search =<FontAwesomeIcon icon={faSearch} />
    const cartLength = useSelector( state => state.products.cartProduct)
    console.log(cartLength.length);

  return <div className='header'>
      <nav className='nav'>
          <div className='icon'>
            <img src={logo} alt="" />
          </div>
          <div className="search-box">
              <input type="search" placeholder='Search here' />
              <button className='button-style'>{search}</button>
              <span></span>
          </div>
          <div className='d-flex'>
                <NavLink className='a-style' as={Link} to="/">Shop</NavLink>
                <NavLink className='a-style' style={{color:'black'}} as={Link} to="/login">{user}</NavLink>
                <NavLink className='a-style' as={Link} to="/">{element}{cartLength.length}</NavLink>
            </div>
          
      </nav>
  </div>;
}

export default Header;
