import React from 'react';
import axios from 'axios';

const Cart = ({ cartItems, removeFromCart, placeOrder }) => {
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handlePlaceOrder = async () => {
        try {
            const res = await axios.post('/api/orders', {
                user: 'user_id', // Replace with actual user ID
                items: cartItems
            });
            console.log('Order placed:', res.data);
            placeOrder();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>Price: ₵{item.price}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ₵{getTotal()}</h2>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default Cart;