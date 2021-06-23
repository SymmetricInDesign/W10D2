import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions"
// import {RECEIVE_TODOS} from "../actions/todo_actions"


function todosReducer(state={}, action){
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_TODOS:
            newState = {}
            action.todos.forEach(todo=>{
                newState[todo.id] = todo
            })
            return newState
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo
            return newState
        case REMOVE_TODO:
            delete newState[action.id]
            console.log(newState)
            return newState
        default:
            return newState

    }
}

export default todosReducer