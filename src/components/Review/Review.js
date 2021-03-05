import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    let [items, setItems] = useState([]);
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map( key => {
        const product = fakeData.find( pd => pd.key === key );
        product.quantity = savedCart[key];
        return product;
    })
    setItems(cartProducts);

    return (
        <div>
            <h1>Total cart items: {items.length}</h1>
        </div>
    );
};

export default Review;