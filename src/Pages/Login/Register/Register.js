import React from 'react';

import { useForm } from "react-hook-form";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Register.css'

const Register = () => {
    const { registerUser } = useAuth()
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        registerUser(data.email, data.password, data.name, history)
        reset()
    };
    // user register page
    return (
        <div>
            <Header></Header>
            <div className='my-4 text-center p-4'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name")}
                        placeholder='Your Name'
                        className="p-2 m-1 input-field"
                        required
                    /> <br />

                    <input {...register("email")}
                        placeholder='Your Email'
                        type="email"
                        className="p-2 m-1 input-field"
                        required
                    /> <br />

                    <input {...register("password")}
                        placeholder='Your password'
                        type="password"
                        className="p-2 m-2 input-field"
                        required
                    /> <br />

                    <input className="btn btn-danger p-2 m-1 w-25" type="submit" value="Register" /> <br />

                    <NavLink
                        style={{ textDecoration: "none" }}
                        to="/login">
                        <p className='fw-bolder pt-3'>Already Registered? Please Login</p>
                    </NavLink>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;