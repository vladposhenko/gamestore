import React, {useCallback, useState} from 'react';
import './cart-block.css'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {useSelector} from "react-redux";
import {CartMenu} from "../cart-menu";
import {calcTotalPrice, getItemsFromStorage} from "../utils";
import {ItemsInCart} from "../items-in-cart";
import {useNavigate} from "react-router-dom";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const storageItems = getItemsFromStorage()
    const navigate = useNavigate()
    const totalPrice = calcTotalPrice(storageItems)
    const handleClick = useCallback((e) => {
        e.stopPropagation()
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className='cart-block'>
            <ItemsInCart count={storageItems.length}/>
            <AiOutlineShoppingCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible) } size={25} className='cart-block__icon'/>
            { totalPrice > 0 ? <span className='cart-block__total-price'> {totalPrice} UAH </span> : null  }
            { isCartMenuVisible && <CartMenu items={storageItems} onClick={ handleClick }/> }
        </div>
    );
};
