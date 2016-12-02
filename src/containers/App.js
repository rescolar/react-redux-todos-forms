import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../containers/TodoList';
import { List, Map } from 'immutable'

// transform the current Redux store state into the props
const mapStateToProps = (state) => {
  console.log('state: ' , state.todos)
  return {
  }
}

// return callback props to inject into the presentational component
const mapDispatchToProps = (dispatch) => {
  return {
  }
}


const dummyTodos = List([
  Map({ id: 0, isDone: true,  text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);


class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

