import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const {product} = useParams()
    const [details , setDetails] = useState([])

    useEffect( () => {
        fetch('https://powerful-oasis-75511.herokuapp.com/products')
        .then(res=>res.json()) 
        .then(data => setDetails(data))
    } , [] )
    const newProduct=details.find(pd => pd.id == product)
    console.log(newProduct)
    return (
        <div className='main-container'>
           <div>
           <img src={newProduct?.img} alt="" />
           </div>
            <div>
            <h2>{newProduct?.name}</h2>
            </div>
           
        </div>
    );
};

export default Details;