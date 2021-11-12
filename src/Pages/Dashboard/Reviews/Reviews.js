import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {

    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();

    /* post req send to server */
    const onSubmit = data => {
        axios.post('https://peaceful-ocean-15686.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };

    // add review about site by user
    return (
        <div className='main'>
            <div className='my-5'>
                <h3 className='text-center fw-bolder'>Add Review Here</h3>
                <div className='text-center mx-auto p-2 border custom-width'>

                    {user && <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("name")}
                            value={user?.displayName}
                            placeholder="Your Name"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("email")}
                            value={user?.email}
                            placeholder="Your Name"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("point")}
                            placeholder="Your rating out of 5"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("review")}
                            placeholder="Your Feedback"
                            className='py-3 p-2 m-1' required
                        />

                        <br />
                        <input type="submit" className='btn btn-danger w-25 p-1 mt-2' />
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default Reviews;