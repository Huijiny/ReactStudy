import React, {useState,useEffect} from 'react'
import styled, { css } from 'styled-components';
import List_cards from './list_card'
import axios from 'axios';

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
        <List_cards data={catlist}></List_cards>
)};

export default List_main