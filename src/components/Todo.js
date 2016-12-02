import React from 'react'

/*
const Todo = (props) => (
	<div/>
)
*/

const Todo = ({todo}) => {
	//console.log(props);
	//const { todo } = props;
  	if(todo.isDone) {
   	 return <strike>{todo.text}</strike>;
  	} else {
    	return <span>{todo.text}</span>;
  	}
}


export default Todo

