import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import useFirebase from '../../hook/useFirebase';
import useAuth from '../../hook/useAuth';

function Register() {
    const [registerFromData ,  setRegisterFromData] = useState({})
    const { registerUser } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = {...registerFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setRegisterFromData(newLogindata)
    }
    const handleRegisterSubmit = e => {
        e.preventDefault()
        registerUser(registerFromData)
    }
  



    
  return <div className='main-from'> <form className='form' onSubmit={handleRegisterSubmit} > 
  <div className='form-inner'>
      <h2>Register</h2>
      <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input
           type="text"
            name='name'
            className="form-control input" 
             id='name'
             onBlur={handleOnChange}
             required
            />
      </div>
      <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
           onBlur={handleOnChange} 
            type="email"
             name='email'
             id="inputEmail3"
              className="form-control input"
               required />
      </div>
      <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
           onBlur={handleOnChange} 
           className="form-control input"
           type="password"
            name='password'
            id="inputPassword3"
             
              required />
      </div>
      <div className='form-group'>
          <label htmlFor="password">Re-Type-Password:</label>
          <input
           onBlur={handleOnChange} 
           className="form-control input"
           type="password"
            name='password'
            id="inputPassword3"
              required />
      </div>
      <NavLink as={Link} to='/login'  >Already Registered ?</NavLink>
      <input className='input' type="submit" value='Register' />
  </div>
</form></div>;
}

export default Register;
