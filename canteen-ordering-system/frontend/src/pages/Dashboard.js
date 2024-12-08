// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import axios from 'axios';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('/api/orders'); // Adjust the endpoint as needed
                setOrders(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <Profile />
                <h2>Order History</h2>
                {loading ? (
                    <p>Loading orders...</p>
                ) : orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <ul>
                        {orders.map(order => (
                            <li key={order._id}>
                                <p>Order ID: {order._id}</p>
                                <p>Status: {order.status}</p>
                                <p>Loyalty Points Earned: {order.loyaltyPoints}</p>
                                <ul>
                                    {order.items.map((item, index) => (
                                        <li key={index}>
                                            <p>{item.name} - ₵{item.price}</p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;