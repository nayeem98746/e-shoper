import './Checkout.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import img1 from '../../Images/SSLCommerz.png';
import useAuth from '../../hook/useAuth';
import { useSelector } from 'react-redux';

const Checkout = ({}) => {
  const { register, handleSubmit } = useForm();
  const cartProduct = useSelector(state=>state.products.cartProduct)
  const cartPrice = useSelector(state=>state.products.cartPrice)
  const  {user} = useAuth()
  // const {name, image, price, quantity} = product;
  const onSubmit = data => console.log(data);
console.log(cartPrice)
  const parchase=()=>{
    const order ={
        cus_name:user?.displayName,
        cus_email:user?.email,
        product_name:cartProduct[0].name,
        product_image:cartProduct[0].image,
         total_amount:cartPrice

    }
    console.log(order)
  fetch(`http://localhost:8000/init`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(order)
  })
  .then(res=>res.json())
  .then(data=>{
    window.location.replace(data);
  })
  }

  
 
    return (
        <div className="container p-4">
           
            <h2 className="text-warning">Checkout</h2>
         
          
            <div className="row">
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <h3><span className="txt-numbering p-2" >1. </span>Customer Information</h3>
                    <hr/>
                    < div className="order">
                    <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("name", { required: true,  })} placeholder="Name *" required />
                <input  defaultValue="" {...register("email")} placeholder="email *" required/>
                <textarea {...register("address")} placeholder="address *"required />
                <input {...register("city")} placeholder="city *"  required/>
                <input {...register("phone")} placeholder="phone *"  required/>
                <textarea {...register("comments")} placeholder="comments *"required />
                <br/>
                   {/* <input type="submit" class="btn btn-warning" /> */}
            </form>
            </div>

    
      

                </div>
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <h3><span className="txt-numbering p-2" >2. </span>Payment Method</h3>
                    <hr/>
                    <div className="container p-3">
                    <h5>Please Select Delivery Method</h5>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Cash In Payment
                </label>
              </div>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  Online Payment
                </label>
              </div>
              <div>
              <h5 className='p-4 '>We Accpet </h5>
              <img src={img1} alt=""/>
                      </div>
                      <button onClick={parchase()} className='button-warning'>Pay</button>

   
  
</div>



                </div>
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                <h3> <span className="txt-numbering p-2" >3. </span> Delivery Method</h3>
                <hr/>
                <div className="container p-3">
                  <h5>Please Select Delivery Method</h5>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Home Dilivery  -- $30
                </label>
              </div>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  Delivery to store  --$15
                </label>
              </div>
              </div>
                

                </div>
                
            </div>
            </div>
           
    );
};

export default Checkout;