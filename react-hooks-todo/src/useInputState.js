import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    submitTodo: () => {setValue('');},
        changeTodo: (event) => {
            setValue(event.target.value);
        }
    };
};