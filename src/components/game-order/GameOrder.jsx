import React from 'react';
import {Button} from "../button/Button";
import './game-order.css'
export const GameOrder = ({game}) => {
    return (
        <div className='game-order'>
            <span className='game-order__price'>{game.price} UAH</span>
            <Button
                type='primary'
                onClick={() => null}
            > В корзину </Button>
        </div>
    );
};

