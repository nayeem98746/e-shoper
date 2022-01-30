import React, { useEffect } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProduct, setDisplayProduct, setProductsCategory } from '../../../../features/counter/counterSlice';
import Product from '../Product/Product';
import './itemContainer.css'

const ItemContainer = () => {
    const dispatch = useDispatch();
    const displayProducts = useSelector( state => state.products.displayProducts)
    const allProducts = useSelector( state => state.products.allProducts)

    useEffect( ()=>{
        dispatch(setDisplayProduct())
    },[allProducts])

    useEffect( ()=>{
        dispatch(fetchProduct())
    },[])
    return (
        <div id="shop-container" className="mt-5 text-center">
            <h2 style={{fontWeight:"700"}} className='mb-0'>Trending Item</h2>
            <div style={{display:"flex",justifyContent:'center'}}>
            <hr style={{width:"50px",color:"#FF8700",height:"3px"}}/>
            </div>
            <div className='my-5'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} className='mb-4'>
                    <Nav variant="pills" style={{justifyContent:'center'}}>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setProductsCategory('Man'))} eventKey="first">MAN</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setProductsCategory('Woman'))} eventKey="second">WOMEN</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={ ()=> dispatch(setProductsCategory('Kids'))} eventKey="three">KIDS</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Container>
                        <div className="card-container">
                         {
                             displayProducts.map( p => <Product key={p.id} product={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Container>
                        <div className="card-container">
                         {
                             displayProducts.map( p => <Product key={p.id} product={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                        <Container>
                        <div className="card-container">
                         {
                             displayProducts.map( p => <Product key={p.id} product={p}/>)
                         }
                        </div>
                        </Container>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
        </div>
    );
};

export default ItemContainer;