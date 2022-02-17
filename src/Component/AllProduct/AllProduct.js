import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setProductToCart } from '../../features/counter/counterSlice';
import './AllProduct.css'

const AllProduct = ({allproduct}) => {
    const { name, price, img,} = allproduct;
    const dispatch = useDispatch()
    // console.log(allproduct);
    return (
        <div>
            <div className='card-main'>
                <div className="imgBox">
                    <img className='img-style' src={img} alt="" />
                </div>
                <div className="contentBox">
                    <h3 className='name-text'>{name}</h3>
                    <h2 className='price'>${price}. <small>99</small> </h2>
                    <Button onClick={ ()=>dispatch(setProductToCart(allproduct))}
                         className='buy-button'>Add to Cart</Button>
                </div>

            </div>
        </div>
    );
};

export default AllProduct;