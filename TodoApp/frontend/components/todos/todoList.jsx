import React from 'react';
import { receiveTodos } from '../../actions/todo_actions.js';
import TodoListItem from './todoListItem.jsx'
import TodoForm from './todo_form'

export default (props) => {
    // debugger
    const receiveTodo = props.receiveTodo
    const todoLis = props.todos.map(todo => {
        return (
            <TodoListItem 
                receiveTodo={receiveTodo}
                removeTodo={props.removeTodo}
                todo={todo} 
                key={todo.id}
            />
        )
    })
    return ( //****/
        <>
            <TodoForm receiveTodo={receiveTodo}/> 
            <ul>{todoLis}</ul>
        </>
    )
}