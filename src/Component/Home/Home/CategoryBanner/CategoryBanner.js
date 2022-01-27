import React from 'react';
import './categoryBanner.css';

const CategoryBanner = () => {
    return (
        <div>
            <div className="category-banner-container">
                <div className="collections mans">
                    <span className="title">Man's Collections</span>
                    <h4>Summer Travel <br/> Collection</h4>
                    <button className="category-button">DISCOVER NOW</button>
                </div>
                <div className="collections bag">
                    <span className="title">Bag Collections</span>
                    <h4>Awesome Bag <br/> 2020</h4>
                    <button className="category-button">SHOP NOW</button>
                </div>
                <div className="collections flash">
                    <span className="title">Flash Sale</span>
                    <h4>Mid Season <br/> Up To <span style={{color:'orange'}}>40%</span> Off</h4>
                    <button className="category-button">DISCOVER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;