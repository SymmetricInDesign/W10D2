import {connect} from 'react-redux'
import { allTodos } from '../../reducers/selectors'
import TodoList from './todoList'
import { receiveTodo, receiveTodos, removeTodo, fetchTodos } from '../../actions/todo_actions';


const mSTP = state => {
    return {
        todos: allTodos(state)
    }
}

const mDTP = dispatch => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        },
        receiveTodos: (todos) => {
            return dispatch(receiveTodos(todos))
        },
        removeTodo: (id) => {
            return dispatch(removeTodo(id))
        },
        fetchTodos: () => {
            return dispatch(fetchTodos())
        }
    }
}

export default connect(mSTP, mDTP)(TodoList)

