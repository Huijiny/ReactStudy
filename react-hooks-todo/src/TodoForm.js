import React from 'react';
import useInputState from './useInputState';
import TextField from '@material-ui/core/TextField'


const TodoForm = ({ saveTodo }) => {

    const {value, submitTodo, changeTodo} = useInputState('');

    return (
            <form 
            onSubmit={(event) => {
                event.preventDefault();
                saveTodo(value);
                submitTodo()
            }}>

                <TextField 
                variant="outlined" 
                placeholder="Add todo" 
                margin="normal"
                onChange={changeTodo}
                value={value}/>
            </form>
    );
};

export default TodoForm;