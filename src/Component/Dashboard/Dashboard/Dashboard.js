import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUserCircle, faHome , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import service from '../../../Images/download (3).png'
import review from '../../../Images/download (2).png'
import './Dashboard.css'
import Review from '../User/Review/Review';
import useAuth from '../../../hook/useAuth';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Button } from 'react-bootstrap';

function Dashboard(props) {
    const {window} = props
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const {admin} = useAuth()
    const handleSrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }




    const home  = <FontAwesomeIcon icon={faHome} />
    const singout  = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logOut } = useAuth();




    const rootElement = document.getElementById("root");


  return <div className='row'>
      <div className='col-md-3 col-lg-3'>
        <div className='sidebar-container'>
            <Button><Link to='/home' >Home</Link></Button>
            <ul className='text-center text '>
                <li>
                    <Link to={`/dashboard`} className='dashboard-menu' >
                        <span className='logo-style' >{home}</span>
                        Home</Link>
                </li>
                <li>
                    <Link  to={`/dashboard/addadmin`} className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        Admin</Link>
                </li>
                <li>
                    <Link  to={`/dashboard/addproduct`} className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        addProduct</Link>
                </li>
               
                <li>
                    <Link to={`/dashboard/review`} className='dashboard-menu' >
                    <span className='logo-style' >{home}</span>
                        Review</Link>
                </li>
                <li>
                    <Link to={`/dashboard/logout`} className='dashboard-menu' >
                    <span className='logo-style' >{singout}</span>
                       <Button onClick={logOut}>LogOut</Button></Link>
                </li>
                
               
              
            
                
                 
                
            </ul>
        </div>
      </div>
      <div className='col-md-9 col-lg-9'>
        <Outlet></Outlet>

      </div>
  </div>;
}

export default Dashboard;
