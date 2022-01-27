import React from 'react';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/login .jpg'
import './Login.css'

function Login() {

    const handleOnChange = e => {
         
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
                    <input type="text" name='name' id='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' id='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' id='password' />
                </div>
                <input type="submit" value='LOGIN' />
                <NavLink as={Link} to='/register' >Please Register</NavLink>
            </div>
        </form>
    </div>;
}

export default Login;
