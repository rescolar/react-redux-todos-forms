import React from 'react'

import { Field, reduxForm } from 'redux-form'

const FilterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Filter Todos:</label>
        <div>
          <Field name="filtertext" component="input" type="text" placeholder="Filter Todos"/>
        </div>
      </div>
      <div>
        <label>New Todos:</label>
        <div>
          <Field name="new" component="input" type="text" placeholder="New Todo"/>
        </div>
      </div>      
      <div>
        <label htmlFor="showdone">Show Only Not Done Yet</label>
        <div>
          <Field name="filterdone" id="showdone" component="input" type="checkbox"/>
        </div>
      </div>      
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'filterForm'  // a unique identifier for this form
})(FilterForm)
