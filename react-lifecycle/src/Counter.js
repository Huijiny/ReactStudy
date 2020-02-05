import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const add = () => {
        setNumber(number+1);
    }

    const sub = () => {
        setNumber(number-1);
    }

    return (
        <div>
            <button onClick={add}></button>
            <button onClick={sub}></button>
            <h1>{number}</h1>
        </div>
    );
};

export default Counter;