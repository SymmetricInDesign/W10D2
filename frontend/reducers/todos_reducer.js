import {RECEIVE_TODO, RECEIVE_TODOS} from "../actions/todo_actions"
// import {RECEIVE_TODOS} from "../actions/todo_actions"

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

function todosReducer(state=initialState, action){
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
        default:
            return newState

    }
}

export default todosReducer