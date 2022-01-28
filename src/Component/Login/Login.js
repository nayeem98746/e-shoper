import React, { useState } from 'react';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/login .jpg'
import './Login.css'

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
                
            </div>
        </form>
    </div>;
}

export default Login;
