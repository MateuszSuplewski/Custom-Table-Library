import React from 'react'
import PropTypes from 'prop-types'
import STableRow from './TableRow.styled'

const TableRow = ({ style, children }) => {
  return (
    <STableRow
      style={style}
    >
      {children}
    </STableRow>
  )
}

TableRow.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default TableRow
