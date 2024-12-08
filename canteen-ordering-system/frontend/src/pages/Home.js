// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="header">
                <img src="/images/logo.png" alt="Logo" className="logo" />
                <h1>Oggy Canteen Ordering System</h1>
            </div>
            <img src="/images/homepage.png" alt="Homepage" className="page-image" />
            <h2>Browse, Customize, Order, and Track – All in One Place!</h2>
            <ul>
                <li>Explore our diverse menu tailored to your taste.</li>
                <li>Customize your meals with ease.</li>
                <li>Earn loyalty points with every order and redeem them for exciting discounts.</li>
                <li>Stay updated with real-time order tracking from preparation to pickup.</li>
            </ul>
            <p>Sign up or log in to start your food journey with Oggy Canteen today!</p>
            <div className="auth-links">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Register</button></Link>
            </div>
            <footer>
                <h2>Contact Us</h2>
                <div className="footer-content">
                    <p>Email: contact.oggycanteen@gmail.com</p>
                    <p>Phone: +233 578 414 835</p>
                    <p>Location: Academic City, Haatso</p>
                </div>
                <p>&copy; {new Date().getFullYear()} Oggy Canteen. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;