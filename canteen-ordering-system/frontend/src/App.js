import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderTracking from './components/OrderTracking';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const placeOrder = () => {
        setCartItems([]);
    };

    return (
        <Router>
            <nav>
                <img src="/images/logo.png" alt="Logo" className="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/order-tracking/12345">Order Tracking</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/menu" element={<Menu addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} placeOrder={placeOrder} />} />
                    <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
