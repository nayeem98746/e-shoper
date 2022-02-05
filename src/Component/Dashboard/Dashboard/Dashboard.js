import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUserCircle, faHome , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import service from '../../../Images/download (3).png'
import review from '../../../Images/download (2).png'
import './Dashboard.css'
import Review from '../User/Review/Review';
import useAuth from '../../../hook/useAuth';

function Dashboard() {
    const home  = <FontAwesomeIcon icon={faHome} />
    const singout  = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logOut } = useAuth();

  return <div className='row'>
      <div className='col-md-3 col-lg-3'>
        <div className='sidebar-container'>
            <ul className='text-center text '>
                <li>
                    <Link as={Link} to="/home" className='dashboard-menu' >
                        <span className='logo-style' >{home}</span>
                        Home</Link>
                </li>
                <li>
                    <Link as={Link} to="/home" className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        Admin</Link>
                </li>
                <li>
                    <Link as={Link} to="/home" className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        Add-Product</Link>
                </li>
                <li>
                    <Link as={Link} to="/review" className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        Review</Link>
                </li>
                <li>
                    <Link as={Link} to='/home' className='dashboard-menu' >
                    <span className='logo-style' >{singout}</span>
                        Logout</Link>
                </li>
              
            
                
                 
                
            </ul>
        </div>
      </div>
      <div className='col-md-9 col-lg-9'>
          <Review></Review>

      </div>
  </div>;
}

export default Dashboard;
