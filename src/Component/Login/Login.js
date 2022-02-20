import React, { useState } from 'react';
import {  Button, Modal, NavLink, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../Images/google.png'
import './Login.css'
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import Navber from '../Home/Shared/Navber/Navber';

function Login() {
    const [loginFromData ,  setLoginFromData] = useState({})
    const { user, googleSignIn, loginUser, modal, setModal } = useAuth()
    const location = useLocation();
    const navigator = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        setLoginFromData(newLogindata)
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        loginUser({...loginFromData,location,navigator})
    }
    // const element = <FontAwesomeIcon icon={fagoogle} />
    const googleIcon = <FontAwesomeIcon icon="fa-solid fa-g" />

    return <>
    <Navber/>
    <div className='main-from'>
              <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Login Successful !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello Mr./Ms. {user?.displayName} You have successfully logged in !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ ()=>setModal(false)}>
            <Link style={{color:'white',textDecoration:'none'}} to="/">Go To Home</Link>
          </Button>
        </Modal.Footer>
      </Modal>
        <form className="form" onSubmit={handleLoginSubmit} >
            <div className='form-inner'>
                <h2>Login</h2>
                
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                     name="email"
                     className="form-control input"
                     
                      id="inputEmail3"
                       onBlur={handleOnBlur}  label="email" 
                       required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                     className="form-control input"
                     type="password" 
                     name='password' 
                     id="inputPassword3"
                     onBlur={handleOnBlur } label='password'
                     required />
                </div>
                <NavLink as={Link} to='/register' >Please Register</NavLink>
                <input className="input" type="submit" value='LOGIN' />
                <button className="button" onClick={ ()=> googleSignIn(location,navigator) }><img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /></button>
                
            </div>
        </form>
    </div>
    </>;
}

export default Login;
