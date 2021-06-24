import React from 'react';
import TodoListItem from './todoListItem.jsx'
import TodoForm from './todo_form'

class TodoList extends React.Component{

    componentDidMount(){
        this.props.fetchTodos()
    }

    render(){
        const createTodo = this.props.createTodo
        const receiveTodo = this.props.receiveTodo
        const todoLis = this.props.todos.map(todo => {
            return (
                <TodoListItem 
                    receiveTodo={receiveTodo}
                    removeTodo={this.props.removeTodo}
                    todo={todo} 
                    key={todo.id}
                />
            )
        })
        return ( //****/
            <>
                <TodoForm createTodo={createTodo}/> 
                <ul>{todoLis}</ul>
            </>
        )
    }
}

export default TodoList