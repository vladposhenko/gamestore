import React from 'react';
import {Button} from "../button/Button";
import './game-order.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";
export const GameOrder = ({game}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        isItemInCart ? dispatch(deleteItemFromCart(game.id)) : dispatch(setItemInCart(game))

    }
    return (
        <div className='game-order'>
            <span className='game-order__price'>{game.price} UAH</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={ handleClick }
            >{isItemInCart ? 'Убрать из корзины' : "В корзину"}</Button>
        </div>
    );
};

