import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  return <div className='main-from'> <form>
  <div className='form-inner'>
      <h2>Register</h2>
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
      <div className='form-group'>
          <label htmlFor="password">Re-Type-Password:</label>
          <input type="password" name='password' id='password' />
      </div>
      <NavLink as={Link} to='/login'  >Already Register</NavLink>
      <input type="submit" value='LOGIN' />
  </div>
</form></div>;
}

export default Register;
