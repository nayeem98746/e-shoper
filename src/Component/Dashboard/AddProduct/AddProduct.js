import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddProduct.css'


const AddProduct = () => {
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = data => {
        console.log(data)
        axios.post('https://powerful-oasis-75511.herokuapp.com/products' , data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added produst successfuly')
                reset()
            }
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> 
      <br/><br/>
      <input {...register("catagory", { required: true, maxLength: 20 })} placeholder="catagory" /> 
      <br/><br/>
      
      <textarea {...register("description" )} placeholder="Description" /><br/><br/>
      <input type="number" {...register("price")} placeholder="price" /><br/><br/>
      <input {...register("img" )} placeholder="img url" /><br/><br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;