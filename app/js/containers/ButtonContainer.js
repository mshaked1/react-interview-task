import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/records'
import { Button } from '../components'

const ButtonContainer = ({ toggleSubmit, getRecords, fetch }) => (
  <div className='buttonContainer'>
    <Button
      className={'buttonChildren'}
      label={'Get All Records'}
      onClick={() => getRecords(fetch)}
    />
    <Button
      className={'buttonChildren'}
      label={'Submit New Record'}
      onClick={() => toggleSubmit()}
    />
  </div>
)

ButtonContainer.propTypes = {
  toggleSubmit: PropTypes.func.isRequired,
  getRecords: PropTypes.func.isRequired,
  fetch: PropTypes.bool.isRequired
}

const mapStateToProps = state => (
  {
    fetch: state.fetch
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getRecords: (fetch) => dispatch(actions.getRecordsSagaActionCreator(fetch)),
    toggleSubmit: () => dispatch(actions.toggleSubmitActionCreator())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)
