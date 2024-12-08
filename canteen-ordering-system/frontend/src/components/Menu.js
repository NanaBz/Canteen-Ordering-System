import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ addToCart }) => {
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
                        <img src={`/images/${item.name.toLowerCase()}.png`} alt={item.name} className="page-image" />
                        <h2>{item.name}</h2>
                        <p>Price: ₵{item.price}</p>
                        <p>Category: {item.category}</p>
                        <p>Nutritional Info: {item.nutritionalInfo}</p>
                        <p>Customization Options: {item.customizationOptions.join(', ')}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;