import React from 'react'
import PropTypes from 'prop-types'
import SHeaderWrapper from './HeaderWrapper.styled'

const HeaderWrapper = ({ style, children }) => {
  return <SHeaderWrapper style={style}>{children}</SHeaderWrapper>
}

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default HeaderWrapper
