import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';
import Root from './components/root.jsx'
import {allTodos} from './reducers/selectors.js'

// window.store = configureStore()
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos
window.removeTodo = removeTodo
window.receiveStep = receiveStep
window.receiveSteps = receiveSteps
window.removeStep = removeStep
window.allTodos = allTodos


document.addEventListener('DOMContentLoaded', ()=>{
    const store = configureStore();
    window.store = store
    const root = document.querySelector("#root");
    ReactDOM.render(<Root store={store}/>, root)
})