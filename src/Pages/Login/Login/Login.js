import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {

    const { loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, history, location);
        reset()
    };

    return (
        <div>
            <Header></Header>
            <div className='my-4 text-center p-4 my-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("email")}
                        placeholder='Your Email'
                        type="email"
                        className="p-2 m-1 input-field"
                        required
                    /> <br />

                    <input {...register("password")}
                        placeholder='Your password'
                        type="password"
                        className="p-2 m-1 input-field"
                        required
                    /> <br />

                    <input className="btn btn-danger p-2 m-2 w-25" type="submit" /> <br />

                    <NavLink
                        style={{ textDecoration: "none" }}
                        to="/register">
                        <p className='fw-bolder pt-3 mb-5'>New User? Please Register</p>
                    </NavLink>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;