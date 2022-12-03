import React from 'react'
import PropTypes from 'prop-types'
import { paginationContext } from '../context/mainContexts'
import TableCell from '../styled/tableItems/TableCell'
import TableRow from '../styled/tableItems/TableRow'

const TableBodyPage = ({ data }) => {
  const { begin, end } = React.useContext(paginationContext)

  return data.slice(begin, end).map((row, rowIndex) => {
    const rowCellsContent = Object.values(row)
    return (
      <TableRow key={rowIndex}>
        {rowCellsContent.map((cell, cellIndex) => (
          <TableCell key={rowIndex + cellIndex}>{cell}</TableCell>
        ))}
      </TableRow>
    )
  })
}

TableBodyPage.propTypes = {
  data: PropTypes.array.isRequired
}

export default TableBodyPage
