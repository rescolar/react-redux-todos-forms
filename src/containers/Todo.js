import  { connect } from 'react-redux'
import Todo from '../components/Todo'

const mapStateToProps = (state) => {
  console.log(state)
  const { todo } = state;
  console.log(todo)
  return {  	  	
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

