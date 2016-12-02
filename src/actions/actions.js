import { ADD_TODO, TOGGLE_TODO, SUBMIT_FORM } from './actionTypes'

const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  }
}


export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}


export const submitForm = (form) => {
  console.log('filterTodos Action>',form);
  return {
    type: SUBMIT_FORM,
    payload: {      
      isDone: false,
      newTodo: form.new,
      filterByText: form.filtertext,
      filterDone: form.filterdone
    }
  }
}

