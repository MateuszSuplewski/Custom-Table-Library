import React from 'react'
import PropTypes from 'prop-types'
import STableBody from './TableBody.styled'

const TableBody = ({ style, children }) => {
  return (
    <STableBody
      style={style}
    >
      {children}
    </STableBody>
  )
}

TableBody.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default TableBody
