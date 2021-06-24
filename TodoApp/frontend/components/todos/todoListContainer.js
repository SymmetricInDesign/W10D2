import {connect} from 'react-redux'
import { allTodos } from '../../reducers/selectors'
import TodoList from './todoList'
import * as TodoActions from '../../actions/todo_actions';


const mSTP = state => {
    return {
        todos: allTodos(state)
    }
}

const mDTP = dispatch => {
    return {
        // receiveTodo: (todo) => {
        //     return dispatch(TodoActions.receiveTodo(todo))
        // },
        // receiveTodos: (todos) => {
        //     return dispatch(TodoActions.receiveTodos(todos))
        // },
        removeTodo: (id) => {
            return dispatch(TodoActions.removeTodo(id))
        },
        fetchTodos: () => {
            return dispatch(TodoActions.fetchTodos())
        },
        createTodo: (todo) => {
            return dispatch(TodoActions.createTodo(todo))
        }
    }
}

export default connect(mSTP, mDTP)(TodoList)

