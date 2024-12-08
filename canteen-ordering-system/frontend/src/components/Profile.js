// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('/api/users/profile'); // Adjust the endpoint as needed
                setProfile(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <p>Loading profile...</p>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Dietary Restrictions: {profile.preferences.dietaryRestrictions}</p>
            <p>Allergies: {profile.preferences.allergies}</p>
            <p>Loyalty Points: {profile.loyaltyPoints}</p>
        </div>
    );
};

export default Profile;