import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteRecordActionCreator } from '../actions/records'
import { ButtonContainer } from './'
import { Table } from '../components/Table'
import Form from '../components/Form/Form'

class HomePageContainer extends Component {
  render() {
    const { records, showForm, deleteRecord } = this.props

    return (
      <div>
        <ButtonContainer />
        {showForm && <Form />}
        <Table records={records} handleDelete={deleteRecord} />
      </div>
    )
  }
}

HomePageContainer.propTypes = {
  records: PropTypes.array,
  showForm: PropTypes.bool.isRequired,
  deleteRecord: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  {
    records: state.records,
    showForm: state.showForm
  }
)

const mapDispatchToProps = dispatch => (
  {
    deleteRecord: (id) => dispatch(deleteRecordActionCreator(id))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
