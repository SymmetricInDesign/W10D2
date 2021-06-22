import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import {receiveTodo, receiveTodos} from './actions/todo_actions';

window.store = configureStore()
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos

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