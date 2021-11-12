import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    /* take input and send to server */
    const onSubmit = data => {
        //console.log(data)
        axios.post('https://peaceful-ocean-15686.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };
    // add new product by admin
    return (
        <div className='main'>
            <div className='login-container my-5'>
                <h2 className='text-center fw-bolder'>Add New Product</h2>
                <div className='text-center mx-auto p-4 border custom-width'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("img")}
                            placeholder="Image Url"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("name")}
                            placeholder="Car Name"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("price")}
                            placeholder="Car Price"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("description")}
                            placeholder="Description"
                            className='p-2 m-1' required
                        />

                        <br />
                        <input type="submit" className='btn btn-danger p-2 px-5 mt-2' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;