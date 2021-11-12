import React from 'react';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css'

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Reviews from '../Reviews/Reviews';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';

const Dashboard = () => {
    const { user, logout, admin } = useAuth()
    const { path, url } = useRouteMatch();

    return (
        <div>
            <div className="sidenav">
                {/*   <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a> */}

                <Link to={`${url}`}><p className='text-primary fw-bolder'>Dashboard</p></Link>

                {
                    admin ? <div>
                        <Link to={`${url}/makeAdmin`}><i className="fas fa-user-shield text-white"></i><small> Make Admin</small></Link>
                        <Link to={`${url}/addProduct`}><i class="fas fa-plus-circle text-white fs-6"></i><small> Add a product</small></Link>
                    </div>

                        : <div>
                            <Link to={`${url}/myorders`}><i className="fas fa-cart-arrow-down text-white"></i> My Orders</Link>
                            <Link to={`${url}/review`}><i className="fas fa-comment-dots text-white"></i> Add Review</Link>
                            <Link to={`${url}/pay`}><i className="fas fa-money-bill-alt text-white"></i> Payment</Link>
                        </div>
                }
                <Link to='/'><i className="fas fa-home text-white"></i> Home</Link>
                {
                    user.email && <NavLink to="/"><button onClick={logout} className="btn btn-danger my-5"><i className="fas fa-sign-out-alt"></i>Log out</button></NavLink>
                }

            </div>
            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;