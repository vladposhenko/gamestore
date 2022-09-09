import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/utils";
import {OrderItem} from "../../components/order-item";
import {getGamesFromCart} from "../../redux/cart/reducer";
import {Loader} from "../../components/loader/Loader";

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    const cartStatus = useSelector(state => state.cart.cartStatus)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGamesFromCart())
    },[])

    if(!cartStatus || cartStatus === 'loading') {
        return <Loader/>
    }

    if(items.length < 1) {
        return <h2>Ваша корзина пуста</h2>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                { items.map(game => <OrderItem game={game} />) }
            </div>
            <div className="order-page__right">
                <div className="order__page__total-price">
                    <span>
                        {items.length} товаров на сумму { calcTotalPrice(items) } UAH
                    </span>
                </div>
            </div>
        </div>
    );
};
