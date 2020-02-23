import React, {useState,useEffect} from 'react'
import styled, { css } from 'styled-components';
import List_cards from './list_card'
import axios from 'axios';


const Lists_constainer = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
    flex: none;
`

const List_main = () => {
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
    <Lists_constainer>
        <List_cards data={catlist}></List_cards>
    </Lists_constainer>
)};

export default List_main