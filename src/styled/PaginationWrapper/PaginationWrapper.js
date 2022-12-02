import React from 'react'
import PropTypes from 'prop-types'
import SPaginationWrapper from './PaginationWrapper.styled'

const PaginationWrapper = ({ style, children }) => {
  return (
    <SPaginationWrapper
      style={style}
    >
      {children}
    </SPaginationWrapper>
  )
}

PaginationWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default PaginationWrapper
