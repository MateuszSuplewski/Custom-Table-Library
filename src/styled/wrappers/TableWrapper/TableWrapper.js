import React from 'react'
import PropTypes from 'prop-types'
import { STableWrapper } from './TableWrapper.styled'

const TableWrapper = ({ style, children }) => {
  return <STableWrapper style={style}>{children}</STableWrapper>
}

TableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default TableWrapper
