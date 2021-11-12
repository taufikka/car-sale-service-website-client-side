import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://peaceful-ocean-15686.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Successfully added admin')
                }
            })
    }
    return (
        <div className='main d-flex justify-content-center align-items-center mt-5 main'>
            <div>
                <h3 className='text-primary text-center fw-bolder'>Make An Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("email")}
                        placeholder="Email"
                        className='px-3 p-1 m-1' />
                    <br />
                    <input type="submit" className='btn btn-success w-50' />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;