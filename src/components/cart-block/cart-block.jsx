import React from 'react';
import './cart-block.css'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";


export const CartBlock = () => {
    return (
        <div className='cart-block'>
            <AiOutlineShoppingCart size={25} className='cart-block__icon'/>
            <span className='cart-block__total-price'> 9999 UAN </span>
        </div>
    );
};
