import {createStore} from 'redux'
import rootReducer from '../reducers/root_reducer'
import {applyMiddleware} from 'redux'
import {myThunk} from '../middleware/thunk'

const initialState = {
  steps: {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
  },

  todos: {
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
  }
}


const configureStore = (preloadedState = initialState) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(myThunk));
}

export default configureStore

// const newTodos = [{
//     id: 1,
//     title: "wash cat",
//     body: "with soap",
//     done: false
//   }, {
//     id: 2,
//     title: "wash god",
//     body: "with shampoo",
//     done: true
//   }, { 
//     id: 3, 
//     title: 'Learn Redux', 
//     body: 'It is fundamental', 
//     done: false 
//   }]


// const newSteps = [{ 
//     1: { // this is the step with id = 1
//       id: 1,
//       title: 'walk to school',
//       done: false,
//       todo_id: 1
//     },
//     2: { // this is the step with id = 2
//       id: 2,
//       title: 'buy food',
//       done: false,
//       todo_id: 1
//     }
//   }];