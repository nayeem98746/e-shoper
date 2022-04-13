import React, { useEffect, useState } from 'react';
import Testemonial from '../Testemonial/Testemonial';

const Testimonoals = () => {
    const [reviews , setReviews] = useState([])
    useEffect( () => {
        fetch('https://morning-temple-60251.herokuapp.com/addReview')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    return (
        <div className='row'>
                <h2 style={{color:'gold', 
                            textAlign:'center',
                            marginBottom:'20px'
            }}  ><i><u>Testmonials</u></i></h2>
            <div className="testmonials-container">
                {
                    reviews.map(review => <Testemonial
                        key= {review._id}
                        review={review}
                    ></Testemonial> )
                    
                        
    
                }
            </div>
        </div>
    );
};

export default Testimonoals;