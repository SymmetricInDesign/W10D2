import React from 'react';
import TodoListItem from './todoListItem.jsx'

export default (props) => {
    const todoLis = props.todos.map(todo => {
        return <TodoListItem todo={todo} key={todo.id}/>
    })
    return (
        <ul>{todoLis}</ul>
    )
}