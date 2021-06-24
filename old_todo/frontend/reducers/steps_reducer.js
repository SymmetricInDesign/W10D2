import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from "../actions/step_actions"
// import {RECEIVE_TODOS} from "../actions/todo_actions"


function stepsReducer(state={}, action){
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_STEPS:
            newState = {}
            action.steps.forEach(step=>{
                newState[step.id] = step
            })
            return newState
        case RECEIVE_STEP:
            newState[action.step.id] = action.step
            return newState
        case REMOVE_STEP:
            delete newState[action.id]
            return newState
        default:
            return newState
    }
}

const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }]
const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }]

export default stepsReducer

