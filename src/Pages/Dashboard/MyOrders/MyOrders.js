import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useAuth()

    /* take input and send to server */
    useEffect(() => {
        fetch('https://peaceful-ocean-15686.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

    // delete order by user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to cancel booking?');
        if (proceed) {
            const url = `https://peaceful-ocean-15686.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        setDeleted(true)
                    } else {
                        setDeleted(false)
                    }
                })
        }
    }

    // specific user order show
    return (
        <div className='main'>
            <div className='container my-4'>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-2'>
                    {
                        orders?.map(order => order.email === user.email &&
                            <div key={order._id} className='col'>
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Booked by: {order.name}</h5>
                                        <h6 className="card-title"><strong>Email:</strong> {order.email}</h6>
                                        <h6 className="card-title">Car: {order.product}</h6>
                                        <h6 className="card-text"> Contact: {order.phone}</h6>
                                        <h6 className="card-text"> Order: <strong>{order.status}</strong></h6>
                                        <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-danger'>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;