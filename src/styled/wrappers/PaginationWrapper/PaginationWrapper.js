import React from 'react'
import PropTypes from 'prop-types'
import SPaginationWrapper from './PaginationWrapper.styled'

const PaginationWrapper = ({ style, children }) => {
  return <SPaginationWrapper style={style}>{children}</SPaginationWrapper>
}

PaginationWrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default PaginationWrapper
