import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core';

const TodoList = ({todos, deleteTodo}) => (
        <List>
            {todos.map((todo, index) => (
                    <ListItem key={index.toString()} dense button>
                    <Checkbox tabIndex={-1} disableRipple/>
                    <ListItemText primary={todo}/>
                    <ListItemSecondaryAction>
                        <IconButton
                        aria-label="Delete"
                        onClick={()=> {
                            deleteTodo(index);
                        }}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );


export default TodoList;