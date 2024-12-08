// src/components/OrderTracking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderTracking = () => {
    const { orderId } = useParams();
    const [status, setStatus] = useState('');
    const [loyaltyPoints, setLoyaltyPoints] = useState(0);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const res = await axios.get(`/api/orders/${orderId}/status`);
                setStatus(res.data.status);
                setLoyaltyPoints(res.data.loyaltyPoints);
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
            <p>Loyalty Points Earned: {loyaltyPoints}</p>
        </div>
    );
};

export default OrderTracking;