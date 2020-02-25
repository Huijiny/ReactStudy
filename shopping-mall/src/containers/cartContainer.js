import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../cart';
import {addProduct,takeProductOut, buyAll} from '../modules/shopping'

const CartContainer = () => {
    const { orders } = useSelector(state => ({
        orders : state.orders
    }));

    const dispatch = useDispatch();

    const onAddProduct = (order) => dispatch(addProduct(order));
    const onTakeProductOut = (order) => dispatch(takeProductOut(order));
    const buy_all = () => dispatch(buyAll());
    
    return (
        <Cart
            orders = {orders}
            addProduct = {onAddProduct}
            takeProductOut = {onTakeProductOut}
            buy_all = {buy_all}
        />
    );

}

export default CartContainer;
