import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Testemonial.css'

const Testemonial = ({review}) => {
    const {id, name, email,comments, img,rating
    }= review

 
    return (
        <div>
            <div className="testimonials">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {email}
    </Card.Text>
    <Card.Text>
     {comments}
    </Card.Text>
    <Card.Text>
     {rating}
    </Card.Text>
  </Card.Body>
</Card>
            </div>
           
        </div>
    );
};

export default Testemonial;