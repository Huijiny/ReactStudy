import React from 'react';
import styled, { css } from 'styled-components';

const Card_box = styled.div`
    width: 300px;
    height: 250px;
    border-radius: 10px;
    font-size : 1rem;
    background: white;
    display : flex;
    flex-direction : column;
    margin : 10px ;
 `
const Card_box_btn = styled.button`
    width: 100%;
    height: 50px;
    background : #ffd633;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    &:hover {
        background : grey;
    }
    
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


const List_card = (props) => {
    console.log("ddd");
    <div>
        {

    props.data.map((cat,index) => 
            <Card_box key={index}>
                <Img ></Img>
                <Name> {cat.name}</Name>
                <Disc> {cat.age}} </Disc>    
                <Card_box_btn>
                        담기
                </Card_box_btn>
            </Card_box>
    )
        }
    </div>
   };

export default List_card;