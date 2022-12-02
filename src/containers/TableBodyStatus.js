import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../styled/TableRow'
import TableCell from '../styled/TableCell'

const TableBodyStatus = ({ content, maxLength }) => {
  return (
    <TableRow>
      <TableCell
        colSpan={maxLength}
        align={'center'}
      >{content}
      </TableCell>
    </TableRow>
  )
}

TableBodyStatus.propTypes = {
  content: PropTypes.string,
  maxLength: PropTypes.number
}

export default TableBodyStatus
