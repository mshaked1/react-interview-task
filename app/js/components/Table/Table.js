import React, { Component, PropTypes } from 'react'
// import ImmutablePropTypes from 'react-immutable-proptypes'
import { TableWrapper, TBody, THead } from '.'

export class Table extends Component {
  render() {
    const { records, handleDelete } = this.props

    return (
      <TableWrapper>
        <THead />
        <TBody records={records} handleDelete={handleDelete} />
      </TableWrapper>
    )
  }
}

Table.propTypes = {
  records: PropTypes.array,
  handleDelete: PropTypes.func.isRequired
}
