import React, { useState } from 'react';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import img from '../../Images/login .jpg'
import google from '../../Images/google.png'
// import './Login.css'

function Login() {
    const [loginFromData ,  setLoginFromData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field , value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)
    }


    const handleLoginSubmit = e => {
        alert('hellow')
        e.prevenDefault()
    }
    // const element = <FontAwesomeIcon icon={fagoogle} />
    const googleIcon = <FontAwesomeIcon icon="fa-solid fa-g" />

    return <div className='main-from'>
        <form onSubmit={handleLoginSubmit} >
            <div className='form-inner'>
                <h2>Login</h2>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input
                     type="text"
                     className="form-control" 
                     name='name'
                      id='name' 
                      label='name'
                       onBlur={handleOnChange} 
                       required
                       />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                     name="email"
                     className="form-control"
                     
                      id="inputEmail3"
                       onBlur={handleOnChange}  label="email" 
                       required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                     className="form-control"
                     type="password" 
                     name='password' 
                     id="inputPassword3"
                     onBlur={handleOnChange } label='password'
                     required />
                </div>
                <NavLink as={Link} to='/register' >Please Register</NavLink>
                <input type="submit" value='LOGIN' />
                <button><img style={{width:'30px', marginLeft:'30px'}} src={google} alt="" /></button>
                
            </div>
        </form>
    </div>;
}

export default Login;
