import React, { Component, PropTypes } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react'

class Form extends Component {
  nameInput({input, meta: { touched, error }, ...custom}) {
    const hasError = touched && error !== undefined
    return (
      <div  className={'formChildren'}>
        {hasError && 
          <Message
            error
            header='Error'
            content={error} />}
        <Input
          error={hasError}
          placeholder='Name'
          {...input}
          {...custom} />
      </div>
    )
  }

  nickNameInput({input, meta: { touched, error }, ...custom}) {
    const hasError = touched && error !== undefined
    return (
      <div className={'formChildren'}>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />}
        <Input
          error={hasError}
          placeholder='Nick Name'
          {...input}
          {...custom} />
      </div>
    )
  }

  floorInput({input, meta: { touched, error }, ...custom}) {
    const hasError = touched && error !== undefined

    return (
      <div  className={'formChildren'}>
        {hasError &&
        <Message
          error
          header='Error'
          content={error} />}
        <Input
          error={hasError}
          placeholder='Floor'
          {...input}
          {...custom} />
      </div>
    )
  }

  submit({ fetch, name, nickName, floor }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'ADD_RECORD',
        fetch,
        name,
        nickName,
        floor,
        resolve,
        reject
      })
    })
  }

  render() {
    const { handleSubmit, fetch } = this.props

    return (
      <form
        onSubmit={handleSubmit(fetch)}
        className={'form'}>
        <h3 className='formChildren'>Submit Cleaning Record!</h3>
        <Field type='text' name='name' component={this.nameInput} />
        <Field type='text' name='nickName' component={this.nickNameInput} />
        <Field type='text' name='floor' component={this.floorInput} />
        <Button type='submit' className='formChildren'>Add Record</Button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  for (let input in values) {
    if (!input || input.trim() === '') {
      errors[input] = `${input} required`
    }
  }
  if (isNaN(+values.floor)) errors.floor = 'Floor must be a number'

  return errors
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fetch: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'form',
  validate
})(Form)

