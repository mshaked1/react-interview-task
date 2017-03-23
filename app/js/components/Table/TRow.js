import React, { PropTypes } from 'react'
import moment from 'moment'
import { Button } from '../'
// import ImmutablePropTypes from 'react-immutable-proptypes'

export const TRow = ({ rowData, iKey, handleDelete }) => (
  <tr>
    <td>{rowData.name}</td>
    <td>{rowData.nickName}</td>
    <td>{rowData.floor}</td>
    <td>{moment(rowData.date).format('hh:mm MMM Do YYYY')}</td>
    <td>
      <Button
        label={'Delete Record'}
        onClick={() => handleDelete(iKey)}
      />
    </td>
  </tr>
)

TRow.propTypes = {
  iKey: PropTypes.number,
  rowData: PropTypes.shape({
    name: PropTypes.string,
    nickName: PropTypes.string,
    floor: PropTypes.string,
    date: PropTypes.date
  }),
  handleDelete: PropTypes.func.isRequired
}
