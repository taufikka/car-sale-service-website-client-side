import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {

    const { _id, name, img, price, description } = props.product;
    const url = `/product/${_id}`;
    return (
        <div>
            <Col className='card box-shadow'>
                {/* single service card */}
                <Card>
                    <Card.Img className='img-fluid' variant="top h-100" src={img} />
                    <Card.Body>
                        <Card.Title className='my-2'>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {description.slice(0, 98)}
                        </Card.Text>

                        <div className="d-flex justify-content-between">
                            <Link to={url}>
                                <Button className="my-2" variant="outline-danger">Buy Now</Button>
                            </Link>
                            <h4 className='p-2 fw-bold'><i className="fas fa-dollar-sign"></i>{price}</h4>
                        </div>

                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default Product;