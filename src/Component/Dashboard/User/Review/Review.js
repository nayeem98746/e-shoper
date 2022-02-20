import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hook/UseAuth';
import './Review.css'

function Review() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();

      const {user} = useAuth()
      const onSubmit = (data) => {
        fetch("https://powerful-oasis-75511.herokuapp.com/addReview", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        },[])
          .then((res) => res.json())
          .then((result) => {
            if(result.acknowledged){
              reset()
              alert('Thanks for successfully giving your feedback !')
            }
          });
       
      };
  return <div className="review-container"> 
    <h1 className='text-success my-4'>Please Give Your Feedback !</h1>
  <form onSubmit={handleSubmit(onSubmit)} className='shadow p-4'>
  <input
    className="input-apply my-0"
    name="name"
    defaultValue={user.displayName}
    {...register("name")}
  />
  <br />
  <input
    className="input-apply"
    type="email"
    name="email"
    defaultValue={user.email}
    {...register("email")}
  />
  <br />
  <input
    className="input-apply"
    id="text-box"
    {...register("comments")}
    placeholder="Write your comments here"
  />
  <br />
  <input
    className="input-apply"
    name="rating"
    placeholder="give us Rating"
    {...register("rating", { required: true })}
  />
  
  <br />
  <input
    className="input-apply"
    name="img"
    placeholder="Your Img"
    {...register("img", { required: true })}
  />
  
  <br />
  <input style={{backgroundColor:'gold', color:'blue', borderRadius:'20px', marginTop:'20px', padding:'10px' }} type="submit" value="Submite" />
</form></div>;
}

export default Review;
