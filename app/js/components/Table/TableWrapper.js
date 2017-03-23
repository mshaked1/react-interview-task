import React, { PropTypes } from 'react'

export const TableWrapper = ({ children }) => (
  <div className={'tableContainer'}>
    <h1 className={'tableChildren'}>Out of Space OOD Cleaning Schedule</h1>
    <table
      className={'tableChildren'}
    >
      {children}
    </table>
  </div>
)

TableWrapper.propTypes = {
  children: PropTypes.any.isRequired
}
