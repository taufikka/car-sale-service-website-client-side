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
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

const Dashboard = () => {
    const { user, logout, admin } = useAuth()
    const { path, url } = useRouteMatch();

    return (
        <div>
            <div className="sidenav">
                {/* dashboard portion */}
                <Link to={`${url}`}><p className='text-primary fw-bolder'>Dashboard</p></Link>

                { // admin can control
                    admin ? <div>
                        <Link to={`${url}/makeAdmin`}><i className="fas fa-user-shield text-white"></i><small> Make Admin</small></Link>
                        <Link to={`${url}/addProduct`}><i class="fas fa-plus-circle text-white fs-6"></i><small> Add a product</small></Link>
                        <Link to={`${url}/manageProducts`}><i class="fas fa-tasks text-white fs-6"></i><small> Manage products</small></Link>
                        <Link to={`${url}/manageAllOrders`}><i class="fas fa-tasks text-white fs-6"></i><small> Manage All Orders</small></Link>
                    </div>

                        : <div>
                            {/* user can control */}
                            <Link to={`${url}/myorders`}><i className="fas fa-cart-arrow-down text-white"></i> My Orders</Link>
                            <Link to={`${url}/review`}><i className="fas fa-comment-dots text-white"></i> Add Review</Link>
                            <Link to={`${url}/pay`}><i className="fas fa-money-bill-alt text-white"></i> Payment</Link>
                            <Link to='/'><i className="fas fa-home text-white"></i> Home</Link>
                        </div>
                }
                {/* logout button */}
                {
                    user.email && <NavLink to="/"><button onClick={logout} className="btn btn-danger mt-5"><i className="fas fa-sign-out-alt"></i>Log out</button></NavLink>
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
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;