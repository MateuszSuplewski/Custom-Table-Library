import React from 'react'
import PropTypes from 'prop-types'
import { sortContext } from '../context/mainContexts'
import Sorter from './Sorter'
import TableHead from '../styled/tableItems/TableHead'
import TableRow from '../styled/tableItems/TableRow'
import TableCell from '../styled/tableItems/TableCell'

const TableHeader = ({ columns }) => {
  const { sorting, handleSortChange } = React.useContext(sortContext)
  return (
    <TableHead>
      <TableRow>
        {columns.map(({ title, field, type }, index) => (
          <TableCell
            onClick={() => handleSortChange(field, type)}
            key={index}
            type={'head'}
            align={'left'}
          >
            {title}
            <Sorter
              isActiveSort = {sorting.field === field}
              order={sorting.order}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired
}

export default TableHeader
