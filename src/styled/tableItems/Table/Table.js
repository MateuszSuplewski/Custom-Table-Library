import React from 'react'
import PropTypes from 'prop-types'
import STable from './Table.styled'

const Table = ({ style, children }) => {
  return <STable style={style}>{children}</STable>
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default Table
