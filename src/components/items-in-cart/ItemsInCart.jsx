import React from 'react';
import './items-in-cart.css'

export const ItemsInCart = ({ count = 0 }) => {
    return count > 0 ? (
        <div className='items-in-cart'>
            { count }
        </div>
    ) : null;
};

