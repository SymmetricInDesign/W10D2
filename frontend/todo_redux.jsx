import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';

window.store = configureStore()
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos
window.removeTodo = removeTodo
window.receiveStep = receiveStep
window.receiveSteps = receiveSteps
window.removeStep = removeStep


const Todo = ()=>{
    return (
        <div>
            testing
        </div>
    )
}

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.querySelector("#root")
    ReactDOM.render(<Todo/>, root)
})