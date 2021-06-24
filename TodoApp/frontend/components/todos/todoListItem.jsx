import React from 'react'

// export default (props) => {
//     handleDeleteClick(e){

//     }
//     return <li>{props.todo.title} <button>delete</button></li>
// }

class TodoListItem extends React.Component {

    constructor(props){
        super(props)
        // this.todo = this.props.todo

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleDoneClick = this.handleDoneClick.bind(this)
    }

    handleDeleteClick(e){
        e.preventDefault()
        
        this.props.removeTodo(this.props.todo.id)
    }

    handleDoneClick(e){
        e.preventDefault()
        // console.log(this.todo)
        const updatedTodo = Object.assign({}, this.props.todo, {done: this.props.todo.done ? false : true})
        this.props.receiveTodo(updatedTodo)
    }

    render (){
        return (
            <li>{this.props.todo.title} 
                <button onClick={this.handleDoneClick}>{this.props.todo.done ? "Undo" : "Done"}</button>
                <button onClick={this.handleDeleteClick}>delete</button>
            </li>
        )
    }
}

export default TodoListItem