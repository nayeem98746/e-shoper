import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddAdmin.css'

const AddAdmin = () => {
  const [email, setEmail] = useState('')

  const { register, handleSubmit } = useForm();
  const handleOnBlur = e => {
    setEmail(e.target.value)
}


const handleAdmin = e => {
  const user = {email}
  fetch('https://morning-temple-60251.herokuapp.com/users/admin', {
      method:'PUT',
      headers:{
       'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data)
  })
  e.preventDefault()
}
  // 
   
  return (
    <div className="make-admin-container">
           <form className='from-main' onSubmit={handleAdmin} >
           <h2 className='text-style' ><i><u>Please Add Admin</u></i></h2> <br/>

      {/* <input className='name-input' {...register("firstName")} required placeholder='Your-Name' /><br/><br/> */}
      <input className='name-input' {...register("email")} type='email' required placeholder='Enter-Email' onBlur={handleOnBlur}  /><br/><br/>
      <input className='submit' type="submit" value="Make Admin" />
    </form>
    </div>
  );
};

export default AddAdmin;