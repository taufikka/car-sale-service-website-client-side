import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch('https://peaceful-ocean-15686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoader(false))
    }, [])



    return (
        <div className='my-5'>
            <Container>
                {/* products part title and data mapping */}
                <div className='my-4 text-center'>
                    <h2 className='fw-bold'>Best SUVs according to our experts</h2>
                </div>

                {loader &&
                    <div className='text-center'>
                        <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
                    </div>
                }

                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;