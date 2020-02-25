import { useState } from "react";

const SET_CART = 'shopping/SET_CART';
const ADD_PRODUCT = 'shopping/ADD_PRODUCT';
const TAKE_PRODUCT_OUT = 'shopping/TAKE_PRODUCT_OUT'
const BUY_ALL='shopping/REMOVEALL_CART';

export const setCart = (order) => ({type: SET_CART, order});
export const addProduct = (order) => ({type: ADD_PRODUCT, order});
export const takeProductOut = (order) => ({type:TAKE_PRODUCT_OUT, order});
export const buyAll = () => ({type: BUY_ALL});

const initialState = {
    orders : []
}

export default function shoppingCart(state = initialState, action) {

    switch(action.type){
        case SET_CART:
            return {
                orders: state.orders.concat({...action.order, number: 1})
                
            }   
        case ADD_PRODUCT:
            console.log(action.order);
            return {
                orders: state.orders.map(order =>
                    action.order._id == order._id ? 
                    {...order, number: action.order.number+1} 
                    : order
                )
            }
        case TAKE_PRODUCT_OUT:
            if(action.order.number>1){
                return {
                    orders: state.orders.map(order =>
                        action.order._id == order._id ? 
                        {...order, number: action.order.number-1} 
                        : order
                    )
                }
            }
            else {               
                return{
                    orders: state.orders.filter(order => action.order._id !== order._id)
                } 
            }
        case BUY_ALL:
            state.orders = [];
            alert('주문 성공!');
        default:
            return state;    
        
    }
}