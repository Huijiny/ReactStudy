import React, {useState,useEffect} from 'react'
import styled, { css } from 'styled-components';
import axios from 'axios';

const CardBoxContainer = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
    flex: none;
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
const CardBoxButton = styled.button`
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

const List_main = ({order, onSetCart}) => {
    const [catlist, setCatlist] = useState([]);
    const apiUrl = 'dummy/cat_list.json';

    const getCats = async () => {
       const { data } = await axios.get(apiUrl)
        setCatlist(data);
    }

    useEffect(() => {
        getCats();
    },[])

    return (
       <CardBoxContainer>
       {
           catlist.map((cat) => 
           <CardBox key={cat._id}>
                   <Img src={cat.imageUrl}></Img>
                   <Name> {cat.name}</Name>
                   <Disc> {cat.age} </Disc>    
                   <CardBoxButton onClick={(e)=>onSetCart(cat)}>
                           담기
                   </CardBoxButton>
               </CardBox>
           )
       }
   </CardBoxContainer>
)};

export default List_main