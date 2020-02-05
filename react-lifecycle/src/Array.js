import React, {useState} from 'react';

const Array = () => {

    const[arrayData, setArrayData] = useState([
        {
            id : 1,
            score : 96,
            text : "리액트"
        },
        {
            id : 2,
            score : 98,
            text : "뷰"
        },
        {
            id : 3,
            score : 92,
            text : "앵귤러"
        }
    ])

    const push = () => {
        setArrayData(
            [
                ...arrayData,
                {
                    id : 4,
                    score : 93,
                    text : 'dd'
                }
            ]
        )
    }

    const filter = () => {
        setArrayData(
            arrayData.filter(data => data.id!==2)
        )
    }

    return (
        <div>
            <button onClick={filter}>클릭</button>
            <button onClick={()=> console.dir(arrayData)}콘솔></button>
        </div>
    );
};

export default Array;