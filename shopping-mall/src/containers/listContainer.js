import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '../list';
import {setCart} from '../modules/shopping'

const ListContainter = () => {
    const { order } = useSelector(state => ({
        order : state.order
    }));

    const dispatch = useDispatch();

    const onSetCart = order => dispatch(setCart( order ));
    
    return (
        <List
            order = {order}
            onSetCart = {onSetCart}
        />
    );

}

export default ListContainter;


