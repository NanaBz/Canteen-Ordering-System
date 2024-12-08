// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        dietaryRestrictions: '',
        allergies: ''
    });

    const { username, email, password, dietaryRestrictions, allergies } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <img src="/images/register.png" alt="Register" className="page-image" />
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" value={username} onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={password} onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Dietary Restrictions:
                        <input type="text" name="dietaryRestrictions" value={dietaryRestrictions} onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Allergies:
                        <input type="text" name="allergies" value={allergies} onChange={onChange} />
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;