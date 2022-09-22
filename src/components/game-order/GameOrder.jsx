import React from 'react';
import {Button} from "../button/Button";
import './game-order.css'
import {useDispatch, useSelector} from "react-redux";
import {
    deleteItemFromCart,
    setItemInCart,
    toggleCartProgress
} from "../../redux/cart/reducer";
import {getItemsFromStorage} from "../utils";
export const GameOrder = ({game}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const storageItems = getItemsFromStorage()
    const isItemInCart = storageItems.some(item => item.id === game.id)
    const cartInProgress = useSelector(state => state.cart.cartInProgress)
    const handleClick = (e) => {
        e.stopPropagation()
        if(isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
        dispatch(toggleCartProgress(game.id))
    }

    return (
        <div className='game-order'>
            <span className='game-order__price'>{game.price} UAH</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={ handleClick }
                isDisabled={cartInProgress.some(id => id === game.id)}
            >{isItemInCart ? 'Убрать из корзины' : "В корзину"}</Button>
        </div>
    );
};

