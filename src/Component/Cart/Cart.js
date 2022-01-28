import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './cart.css'

const Cart = () => {
    const cartProducts = useSelector(state=> state.products.cartProduct)
    return (
        <Container className="my-3">
            <h3 className='text-center'>Shopping Cart</h3>
            <p className='text-center'>{cartProducts.length} Items in your cart !</p>
            <div className="cart-product-container">
                <div className="product-name">
                    
                </div>
                <div className="product-info">

                </div>
            </div>
        </Container>
    );
};

export default Cart;