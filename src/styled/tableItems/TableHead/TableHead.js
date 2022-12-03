import React from 'react'
import PropTypes from 'prop-types'
import STableHead from './TableHead.styled'

const TableHead = ({ style, children }) => {
  return <STableHead style={style}>{children}</STableHead>
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default TableHead
