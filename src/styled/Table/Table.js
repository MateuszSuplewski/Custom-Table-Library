import React from 'react'
import PropTypes from 'prop-types'
import STable from './Table.styled'

const Table = ({ style, children }) => {
  return (
    <STable
      style={style}
    >
      {children}
    </STable>
  )
}

Table.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default Table
