import React from 'react';
// import './Checkout.css'
import { useForm } from "react-hook-form";

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='container p-5'>
  

        <div className='row'>
            <div className='col-md-4'>
                <h4> 1.Customer Information </h4>
               
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                            


                          
                          

            </div>
            <div className='col-md-4'>
                <h3> 2. Payment Method </h3>
               

            </div>
            <div className='col-md-4'>
                <h3> 3 Delivery Method </h3>
            </div>
        </div>
        </div>
    );
};

export default Checkout;