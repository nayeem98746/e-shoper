import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Navber from '../Home/Shared/Navber/Navber';
import './AllProducts.css'

const AllProducts = () => {
    const [allproducts, setAllproducts] = useState([])

    useEffect( () => {
        fetch('https://powerful-oasis-75511.herokuapp.com/products')
        .then(res => res.json())
        .then( data =>  setAllproducts(data))
    }, [] )
    return (
        
        <div className='row'>
            <Navber></Navber>
            
            <h2>Our Products</h2>
            <div className='product-container' >
                {
                    allproducts.map(allproduct => <AllProduct
                    key={allproduct._id}
                    allproduct={allproduct}
                    >

                    </AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;