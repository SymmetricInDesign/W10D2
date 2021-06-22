import {createStore} from 'redux'
import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
  }

export default configureStore

const newTodos = [{
    id: 1,
    title: "wash cat",
    body: "with soap",
    done: false
  }, {
    id: 2,
    title: "wash god",
    body: "with shampoo",
    done: true
  }]
