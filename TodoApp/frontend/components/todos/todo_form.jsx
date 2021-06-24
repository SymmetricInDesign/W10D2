import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: ""
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    updateTitle(e){
        // console.log(this.state)
        this.setState({title: e.target.value})
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        const todo = Object.assign({}, this.state, {id: new Date().getTime(), done: false})
        console.log(this.props)
        this.props.receiveTodo(todo);
    }

    render(){
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h1>Add a Todo</h1>
                <label>Title
                    <input type="text"
                        onChange={this.updateTitle}
                        value = {this.state.title}
                    />
                </label>
                <label>Body
                    <input type="text"
                        onChange={this.updateBody}
                        value={this.state.body}
                    />
                </label>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm