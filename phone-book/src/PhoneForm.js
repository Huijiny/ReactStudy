import React, { useState,useRef, useReducer} from 'react';
import './App.css';



const PhoneForm = () => {
  const [inputs, setInputs] = useState({
      name:'',
      phoneNumber:''
  });
  const inputName = useRef();
 
  const {name, phoneNumber} = inputs;
  const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value 
        });
  };
  const onReset = () => {
      setInputs({
          name:'',
          phoneNumber:''
      });
      inputName.current.focus();
  };
  
  return (
    <div>
     <input
        name="name"
        value={name}
        onChange={onChange}
        ref={inputName}
     />
     <input 
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
     />
     <div>
     <button onClick={onReset}>RESET</button>
     </div>
     
     
     <div>이름 : {name}</div>
     
     <div>폰넘버 : {phoneNumber}</div>
    </div>
  );
}

export default PhoneForm;
