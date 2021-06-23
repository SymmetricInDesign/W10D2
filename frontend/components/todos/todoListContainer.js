import {connect} from 'react-redux'
import { allTodos } from '../../reducers/selectors'
import TodoList from './todoList'
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';


const mSTP = state => {
    return {
        todos: allTodos(state)
    }
}

const mDTP = dispatch => {
    return {
        receiveTodo: (todo) => {
            // debugger
            return dispatch(receiveTodo(todo))
        },
        receiveTodos: (todos) => {
            return dispatch(receiveTodos(todos))
        },
        removeTodo: (id) => {
            // console.log("removing todo")
            // debugger
            // console.log(state)
            return dispatch(removeTodo(id))
        }
    }
}

export default connect(mSTP, mDTP)(TodoList)

