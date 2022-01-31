import './Checkout.css';
import React from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
 
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <h3>Customer Information</h3>
                    <hr/>
                    < div className="order">
                    <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("name", { required: true,  })} placeholder="Name" />
                <input  defaultValue="" {...register("email")} placeholder="email" />
                <textarea {...register("address")} placeholder="address" />
                <input {...register("city")} placeholder="city" />
                <input {...register("phone")} placeholder="phone" />
                <br/>
                   {/* <input type="submit" class="btn btn-warning" /> */}
            </form>
            </div>

    
      

                </div>
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <h3>Payment Method</h3>
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
              <h5>We Accpet </h5>
                      </div>

   
  
</div>



                </div>
                <div className="col-md-4 p-4 shadow-lg p-3 mb-5 bg-white rounded">
                <h3>Delivery Method</h3>
                <hr/>
                <div className="container p-3">
                  <h5>Please Select Delivery Method</h5>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Home Dilivery 
                </label>
              </div>
              <div class="form-check ">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  Delivery to store
                </label>
              </div>
              </div>
                

         </div>
                
            </div>
            
        </div>
    );
};

export default Checkout;