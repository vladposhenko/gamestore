import React from 'react';
import {GameCover} from "../game-cover";
import './order-item.css'
import {useDispatch} from "react-redux";
import {deleteFromCart, deleteItemFromCart} from "../../redux/cart/reducer";
import {AiOutlineCloseCircle} from "@react-icons/all-files/ai/AiOutlineCloseCircle";

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} UAH</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    );
};

