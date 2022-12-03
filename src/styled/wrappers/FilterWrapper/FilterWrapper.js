import React from 'react'
import PropTypes from 'prop-types'
import SFilterWrapper from './FilterWrapper.styled'

const FilterWrapper = ({ style, children }) => {
  return <SFilterWrapper style={style}>{children}</SFilterWrapper>
}

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default FilterWrapper
