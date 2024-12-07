import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await axios.get('/api/menu');
                setMenuItems(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <p>Category: {item.category}</p>
                        <p>Nutritional Info: {item.nutritionalInfo}</p>
                        <p>Customization Options: {item.customizationOptions.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;