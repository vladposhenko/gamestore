import React, {useEffect} from 'react';
import {Button} from "../button/Button";
import './game-order.css'
import {useDispatch, useSelector} from "react-redux";
import {
    deleteFromCart,
    deleteItemFromCart,
    saveInCart,
    setItemInCart,
    toggleCartProgress
} from "../../redux/cart/reducer";
import {Loader} from "../loader/Loader";
export const GameOrder = ({game}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const cartStatus = useSelector(state => state.cart.cartStatus)
    const isItemInCart = items.some(item => item.id === game.id)
    const cartInProgress = useSelector(state => state.cart.cartInProgress)
    const handleClick = (e) => {
        e.stopPropagation()
        isItemInCart ? dispatch(deleteFromCart(game.id)) : dispatch(saveInCart(game))
        dispatch(toggleCartProgress(game.id))
        // setItemInCart(game)
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

