import React from 'react';
import { Button } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className="container mt-5">
            <div style={{alignItems:'center'}} className="row g-3">
                <div className="col-md-6">
                    <h4>UP TO 50% OFF</h4>
                    <h2 style={{fontSize:'50px', color:'orange'}}>Shirt for man</h2>
                    <p>Maboriosam in a nesciung eget magnae dapibus disting tloctioin the find it pereri odiy maboriosm.</p>
                    <Button variant="dark">SHOP NOW !</Button>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/9YBZwvp/mans-model-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;