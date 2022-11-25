import React from 'react'
import PropTypes from 'prop-types'
import { STable, STitle } from './Table.styled'

const Table = ({ style, styleTitle, title, children }) => {
  return (
    <STable
      style={style}
    >
      <STitle style={styleTitle}>{title}</STitle>
      {children}
    </STable>
  )
}

Table.propTypes = {
  style: PropTypes.object,
  styleTitle: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string
}

export default Table
