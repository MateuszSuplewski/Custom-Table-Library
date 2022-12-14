import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../styled/tableItems/TableRow'
import TableCell from '../styled/tableItems/TableCell'

const TableBodyStatus = ({ content, maxLength }) => {
  return (
    <TableRow>
      <TableCell
        colSpan={maxLength}
        align={'center'}
      >
        {content}
      </TableCell>
    </TableRow>
  )
}

TableBodyStatus.propTypes = {
  content: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
}

export default TableBodyStatus
