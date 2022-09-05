import React, {useState} from 'react';
import './cart-block.css'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {useSelector} from "react-redux";
import {CartMenu} from "../cart-menu";
import {calcTotalPrice} from "../utils";
import {ItemsInCart} from "../items-in-cart";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    return (
        <div className='cart-block'>
            <ItemsInCart count={items.length}/>
            <AiOutlineShoppingCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible) } size={25} className='cart-block__icon'/>
            { totalPrice > 0 ? <span className='cart-block__total-price'> {totalPrice} UAN </span> : null  }
            { isCartMenuVisible && <CartMenu items={items} onClick={() => {}}/> }
        </div>
    );
};
