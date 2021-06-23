import React from 'react';
import TodoListContainer from './todos/todoListContainer';

const App = (props)=>{
    return (
        <div>
            <h1>To Do List</h1>
            <TodoListContainer/>
        </div>
    )
}

export default App