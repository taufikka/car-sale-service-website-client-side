import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = () => {

    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
    }, [])
    //`/product/${_id}`

    return (
        <div>
            <Container className='my-3'>
                <div className='my-4 text-center'>
                    <h1 className='fw-bold'>More SUV Collections</h1>
                </div>
                <Row xs={1} md={2} lg={3} className='g-4 my-4'>
                    {
                        moreProducts.map(product => <Col key={product._id}>
                            <Card>
                                <Card.Img className='img-fluid' variant="top h-100" src={product.img} />
                                <Card.Body>
                                    <Card.Title className='my-2'>{product.name}</Card.Title>
                                    <Card.Text className='text-secondary'>
                                        {product.description.slice(0, 150)}
                                    </Card.Text>

                                    <div className="d-flex justify-content-between">

                                        <Link to={`/product/${product._id}`}>
                                            <Button className="my-2" variant="outline-danger">Buy Now</Button>
                                        </Link>

                                        <h4 className='p-2 fw-bold'><i className="fas fa-dollar-sign"></i>{product.price}</h4>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Explore;