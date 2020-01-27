import React, { useState} from 'react';
import './App.css';



const PhoneForm = () => {
  const [inputs, setInputs] = useState({
      name:'',
      phoneNumber:''
  });
 
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
  };
  
  return (
   <form>
     <input
        name="name"
        value={name}
        onChange={onChange}
     />
     <input 
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
     />
     <div>
     <button onClick={onReset}>리ㅣㅣㅣㅣㅣㅣ셋ㅅㅅ</button>
     </div>
     
     
     <div>이름 : {name}</div>
     
     <div>폰넘버 : {phoneNumber}</div>
    
   </form>
  );
}

export default PhoneForm;
