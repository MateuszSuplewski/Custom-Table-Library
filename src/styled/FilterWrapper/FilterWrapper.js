import React from 'react'
import PropTypes from 'prop-types'
import SFilterWrapper from './FilterWrapper.styled'

const FilterWrapper = ({ style, children }) => {
  return (
    <SFilterWrapper
      style={style}
    >
      {children}
    </SFilterWrapper>
  )
}

FilterWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default FilterWrapper
