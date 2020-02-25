import React, {useState,useEffect} from 'react';
import styled, { css } from 'styled-components';

const CartContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`
const Ordering = styled.button`
    width : 100%;
    height: 70px;
    background : #ffd633;
`

const CardBoxContainer = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    
`
const CardBox = styled.div`
    width: 300px;
    height: 250px;
    border-radius: 10px;
    font-size : 1rem;
    background: white;
    display : flex;
    flex-direction : column;
    margin : 10px ;
 `
const CardBoxCounter = styled.div`
    width: 100%;
    height: 50px;
    background : #ffd633;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction:row;
    align-items: center;
`

const Name = styled.p`
    color: black;
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 5px;
`
const Disc = styled.p`
    color: grey;
    font-size : 10px;
    margin-left: 10px;
    margin-top: 5px;
`
const Img = styled.img`
    width: 100%;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const NumberOfCats = styled.p`
    flex: none;
`
const UpDownButton = styled.button`
    height: 30px;
    margin : 5px;
`

const Cart = ({orders, addProduct, takeProductOut, buy_all}) => {

    return (
    <CartContainer>
            <CardBoxContainer>
            { 
                orders.length>0 ? 
                orders.map((cat) => 
                <CardBox key={cat._id}>
                        <Img src={cat.imageUrl}></Img>
                        <Name> {cat.name}</Name>
                        <Disc> {cat.age} </Disc>    
                        <CardBoxCounter>
                        <UpDownButton onClick={(e)=>takeProductOut(cat)}>-</UpDownButton>
                        <NumberOfCats>{cat.number}마리</NumberOfCats>  
                            <UpDownButton onClick={(e)=>addProduct(cat)}>+</UpDownButton>
                        </CardBoxCounter>
                    </CardBox>
                )
                :
                <div>장바구니가 비었습니다.</div>
            }
        </CardBoxContainer>

        <Ordering onClick={() => buy_all()}>주문하기</Ordering>
   </CartContainer>
)};

export default Cart;