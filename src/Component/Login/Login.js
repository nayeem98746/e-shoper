import React, { useState } from 'react';
import {  NavLink, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Images/login .jpg'
import google from '../../Images/google.png'
import './Login.css'
import useFirebase from '../../Hook/useFirebase';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Login() {
    const [loginFromData ,  setLoginFromData] = useState({})
    const { user, googleSignIn, loginUser } = useFirebase()
    const location = useLocation();
    const navigator = useNavigate()

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

    return <div className='main-from'>
        <form onSubmit={handleLoginSubmit} >
            <div className='form-inner'>
                <h2>Login</h2>
                
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                     name="email"
                     className="form-control"
                     
                      id="inputEmail3"
                       onBlur={handleOnBlur}  label="email" 
                       required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                     className="form-control"
                     type="password" 
                     name='password' 
                     id="inputPassword3"
                     onBlur={handleOnBlur } label='password'
                     required />
                </div>
                <NavLink as={Link} to='/register' >Please Register</NavLink>
                <input type="submit" value='LOGIN' />
                <button onClick={ googleSignIn }><img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /></button>
                
            </div>
        </form>
    </div>;
}

export default Login;
