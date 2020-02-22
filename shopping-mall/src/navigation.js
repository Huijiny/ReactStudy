import React from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const Navigator = styled.div`
    width: 100%;
    height: 40px;
    background: grey;
    display: flex;
    flex-direction: row-reverse;
`


const Navigation = (props) => {
    return (
        <Navigator>
            <Link to="/">상품목록</Link>
            <Link to="/cart">장바구니</Link>
        </Navigator>
    );
};

export default Navigation;
