import { ADD_TODO, TOGGLE_TODO, ADD_FROM_FORM } from '../actions/actionTypes'
import cloneDeep from 'lodash/cloneDeep'
import {reducer as formReducer} from 'redux-form'

/*
const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];
const init = dummyTodos
*/

const uid = () => Math.random().toString(34).slice(2);
function isDone (todo){
  return todo.isDone
}
function isNotDone (todo){
  return !todo.isDone
}

export const todos = (todos=[], action) => {
  switch(action.type) {

    case 'ADD_TODO':
      return todos = [ ...todos, action.payload ]

    case 'SUBMIT_FORM':      
      if (action.payload.newTodo){  
        var todo = {
          id: uid(),
          isDone: false,
          text: action.payload.newTodo
        }
        todos = [ ...todos, todo ]
        
      }
      if (action.payload.filterDone){
          todos = todos.filter(isNotDone)
      }      
      return todos;

    case 'TOGGLE_TODO':
      
      return cloneDeep(todos.map(t => {
        if(t.id === action.payload) {  
          t.isDone = !t.isDone;                    
          return t
        } else {
          return t;
        }
      }))
    default:
      return todos;
  }
}

export const form = formReducer

