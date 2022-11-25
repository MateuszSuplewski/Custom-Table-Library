import React from 'react'
import PropTypes from 'prop-types'
import { SDataCell, SHeaderCell } from './TableCell.styled'

const TableCell = ({ style, align, type = 'data', children, ...otherProps }) => {
  const cellType = {
    data: SDataCell,
    head: SHeaderCell
  }
  const STableCell = cellType[type]

  return (
    <STableCell
      style={style}
      align={align}
      {...otherProps}
    >
      {children}
    </STableCell>
  )
}

TableCell.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node
}

export default TableCell
