import React, { PropTypes } from 'react'
// import ImmutablePropTypes from 'react-immutable-proptypes'
import { TRow } from '.'

export const TBody = ({ records, handleDelete }) => (
  <tbody>
    {records && records.map((rowData, index) => 
      <TRow
        rowData={rowData}
        key={index}
        iKey={index}
        handleDelete={handleDelete}
      />)
    }
  </tbody>
)

TBody.propTypes = {
  records: PropTypes.array,
  handleDelete: PropTypes.func.isRequired
}
