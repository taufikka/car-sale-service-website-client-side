import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './ProductBook.css'

const ProductBook = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-ocean-15686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();

    /* post req send to server */
    const onSubmit = data => {
        axios.post('https://peaceful-ocean-15686.herokuapp.com/orders', data, data.status = 'pending')
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };
    // product book form and details show about product
    return (
        <div>
            <Header></Header>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2'>
                <div className='col'>
                    <h2 className='text-center my-3 fw-bolder'>Your Car Order here</h2>
                    <div className='text-center my-4 mx-auto p-4 border custom-width'>
                        {products.map(product => product._id == id ?
                            <form key={product._id} onSubmit={handleSubmit(onSubmit)}>

                                <input  {...register("name")}
                                    value={user.displayName}
                                    placeholder="Name"
                                    className='p-2 m-1' required />
                                <br />

                                <input  {...register("email")}
                                    value={user.email}
                                    placeholder="email"
                                    className='p-2 m-1' />
                                <br />

                                <input  {...register("product")}
                                    value={product.name}
                                    placeholder="tour-place"
                                    className='p-2 m-1' />

                                <br />

                                <input  {...register("address")}
                                    placeholder="Your address"
                                    className='p-2 m-1' required
                                />
                                <br />
                                <input  {...register("phone")}
                                    placeholder="Phone number"
                                    className='p-2 m-1' required
                                />

                                <br />
                                <input  {...register("date")}
                                    type='date'
                                    placeholder="Date"
                                    className='p-2 m-1' required
                                />

                                <br />

                                <input type="submit" className='btn btn-danger w-50 mt-2' />

                            </form> : <div></div>)}
                    </div>
                </div>
                <div className='col'>
                    <div>
                        {products.map(product => product._id == id ?

                            <div className="card mx-auto mb-3 w-50 mt-5 border-0">
                                <img src={product.img} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"><strong>More Details:</strong> {product.description}</p>
                                </div>
                            </div>

                            : <div></div>)}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductBook;