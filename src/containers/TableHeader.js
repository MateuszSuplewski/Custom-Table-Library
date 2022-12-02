import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '../styled/TableHead'
import TableRow from '../styled/TableRow'
import TableCell from '../styled/TableCell'
import Sorter from './Sorter'

const TableHeader = ({ data }) => {
  return (
    <TableHead>
      <TableRow>
        {data.map(({ title, field, type }, index) => (
          <TableCell
            onClick={() => applySorting(field, type)}
            key={index}
            type={'head'}
            align={'left'}
          >
            {title}
            <Sorter
              isChosenSort = {sorting.field === field}
              order={sorting.order}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
  data: PropTypes.array
}

export default TableHeader
