import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTracking = ({ orderId }) => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const res = await axios.get(`/api/orders/${orderId}/status`);
                setStatus(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchOrderStatus();
    }, [orderId]);

    return (
        <div>
            <h1>Order Tracking</h1>
            <p>Status: {status}</p>
        </div>
    );
};

export default OrderTracking;