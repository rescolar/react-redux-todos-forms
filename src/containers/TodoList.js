import  { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodo, toggleTodo, submitForm } from '../actions/actions';

const mapStateToProps = (state) => {	
	let todos = state.todos
	if(state.form && state.form.filterForm && state.form.filterForm.values && state.form.filterForm.values.filtertext && state.form.filterForm.values.filtertext.length>0) {				
		/*
		todos = todos.filter(function(value){			
  			if(value.text) {
      			return value.text.indexOf(state.form.filterForm.values.filtertext) >= 0;
  			}
		});
		*/
		todos = todos.filter(value => {			
  			if(value.text) {
      			return value.text.indexOf(state.form.filterForm.values.filtertext) >= 0;
  			}
		});

	}
  return { 
    todos: todos    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	addTodo: text => dispatch(addTodo(text)),
  	submitForm: form => dispatch(submitForm(form)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

