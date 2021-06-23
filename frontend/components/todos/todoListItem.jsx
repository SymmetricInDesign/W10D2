import React from 'react'

// export default (props) => {
//     handleDeleteClick(e){

//     }
//     return <li>{props.todo.title} <button>delete</button></li>
// }

class TodoListItem extends React.Component {

    constructor(props){
        super(props)
        this.todo = this.props.todo
        this.state = this.props.todo

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleDoneClick = this.handleDoneClick.bind(this)
    }

    handleDeleteClick(e){
        e.preventDefault()
        
        this.props.removeTodo(this.todo.id)
    }

    handleDoneClick(e){
        e.preventDefault()
        // console.log(this.todo)
        const updatedTodo = Object.assign({}, this.todo)
        console.log(typeof updatedTodo["done"])
        updatedTodo["done"] = !updatedTodo["done"]
        
        this.props.receiveTodo(updatedTodo)

    }

    render (){
        return (
            <li>{this.todo.title} 
                <button onClick={this.handleDoneClick}>{this.todo.done ? "Undo" : "Done"}</button>
                <button onClick={this.handleDeleteClick}>delete</button>
            </li>
        )
    }
}

export default TodoListItem