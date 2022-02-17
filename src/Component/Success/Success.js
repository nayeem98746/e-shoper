import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
    return (
        <div>
          <div className="container">
   <div className="row">
      <div className="col-md-6 mx-auto mt-5">
         <div className="payment">
            <div className="payment_header">
               <div className="check"><i className="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div className="content">
               <h1>Payment Success !</h1>
               <p>Your Payment Successfully Done.your order now ready to delivery. </p>
               <NavLink as={Link} to='/home'  >Back to Home</NavLink>
            </div>
            
         </div>
      </div>
   </div>
</div>
        </div>
    );
};

export default Success;