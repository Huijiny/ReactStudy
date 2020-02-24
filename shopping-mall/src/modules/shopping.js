

const SET_CART = 'shopping/SET_CART';
const GET_DATA_FROM_CART = 'shopping/GET_DATA_FROM_CART';
const REMOVEALL_CART='shopping/REMOVEALL_CART';

export const setCart = (order) => ({type: SET_CART, order})
export const getDataFromCart = () => ({type: GET_DATA_FROM_CART});
export const removeAllCart = () => ({type: REMOVEALL_CART});

const initialState = [];

export default function shoppingCart(state = initialState, action) {
    switch(action.type){
        case SET_CART:
            return state.concat(action.order);
        case GET_DATA_FROM_CART:
            return state;
        case REMOVEALL_CART:
            state = [];
        default:
            return state;    
        
    }
}