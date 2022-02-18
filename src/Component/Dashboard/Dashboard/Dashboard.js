import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome , faSignOutAlt, faCartPlus, faComment, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
import useAuth from '../../../hook/useAuth';
import { Button, Nav, Tab } from 'react-bootstrap';

function Dashboard(props) {

    const home  = <FontAwesomeIcon icon={faHome} />
    const cartIcon  = <FontAwesomeIcon icon={faCartPlus} />
    const review  = <FontAwesomeIcon icon={faComment} />
    const userIcon  = <FontAwesomeIcon icon={faUserAlt} />
    const singout  = <FontAwesomeIcon icon={faSignOutAlt} />
    const { logOut } = useAuth();

  return(<>
          <div className='dashboard-menu-container'>
                <Tab.Container defaultActiveKey="third">
                <div className='sidebar-container'>
                <Nav variant="pills" className="flex-column dashboard-nav-links">
                  <Nav.Item className=''>
                  

                    <Nav.Link>
                      <Link  to={`/`} className='dashboard-menu' ><span className='logo-style' >{home}</span>Home</Link> 
                    </Nav.Link>
                    <Nav.Link eventKey="third">
                      <Link  to={`/dashboard/review`} className='dashboard-menu' ><span className='logo-style' >{review}</span>Review</Link>
                    </Nav.Link>
                      <Nav.Link eventKey="first"><Link  to={`/dashboard/addadmin`} className='dashboard-menu' ><span className='logo-style' >{userIcon}</span> Admin</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"><Link  to={`/dashboard/addproduct`} className='dashboard-menu' ><span className='logo-style' >{cartIcon}</span>Add-Product</Link>
                  </Nav.Link>
                    <Button onClick={logOut} variant="danger" className="m-3">{singout}LogOut</Button>
                  </Nav.Item>
                </Nav>
                </div>
                
              <div className='border'>
                <Outlet></Outlet>
              </div>
                </Tab.Container>
          </div>;
</>)
}

export default Dashboard;
