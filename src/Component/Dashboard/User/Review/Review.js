import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'

function Review() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
       
        
      };
  return <div>   <form onSubmit={handleSubmit(onSubmit)}>
  <input
    className="apply-form-input"
    name="name"
    defaultValue="Name"
    {...register("name")}
  />
  <br />
  <input
    className="apply-form-input"
    type="email"
    name="email"
    defaultValue="email"
    {...register("email")}
  />
  <br />
  <input
    className="apply-form-input"
    id="text-box"
    {...register("comments")}
    placeholder="Write your comments here"
  />
  <br />
  <input
    className="apply-form-input"
    name="rating"
    placeholder="give us Rating"
    {...register("rating", { required: true })}
  />
  {/* {errors.exampleRequired && <span>This field is required</span>} */}
  <br />
  <input className="confirm-apply-btn" type="submit" value="Submite" />
</form></div>;
}

export default Review;
