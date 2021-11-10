import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // loader for not logout on reload
    if (isLoading) {
        return <div className='text-center'>
            <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;