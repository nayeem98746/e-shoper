import React from 'react';
import './product.css'
const Product = ({product}) => {
    const { image, name, price } = product;
    return (
        <div className="shadow border">
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="card-info p-2">
                <div className="price-div">
                    <p style={{textAlign:'left',marginBottom:'5px',fontWeight:"500"}}>{name}</p>
                    <p style={{textAlign:'left',marginBottom:'5px',fontWeight:"500"}}>${price}.00</p>
                </div>
                <div className="cart-div">
                    <i class="fas fa-cart-plus"></i><span> Add To Cart</span>
                </div>
            </div>
        </div>
    );
};

export default Product;