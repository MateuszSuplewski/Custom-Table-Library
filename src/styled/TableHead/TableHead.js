import React from 'react'
import PropTypes from 'prop-types'
import STableHead from './TableHead.styled'

const TableHead = ({ style, children }) => {
  return (
    <STableHead
      style={style}
    >
      {children}
    </STableHead>
  )
}

TableHead.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default TableHead
