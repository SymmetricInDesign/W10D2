export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as TodoAPIUtil from "../util/todo_api_util";

export const receiveTodos = todos => {
    return {
        type: RECEIVE_TODOS,
        todos: todos
    }
}

export const receiveTodo = todo =>{
    return {
        type: RECEIVE_TODO,
        todo: todo
    }
}

export const removeTodo = id =>{
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export const fetchTodos = () => {
    return dispatch => {
        return TodoAPIUtil.fetchTodos().then(todos => {
            dispatch(receiveTodos(todos))
        })
    }
}