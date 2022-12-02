import React from 'react'
import PropTypes from 'prop-types'
import SHeaderWrapper from './HeaderWrapper.styled'

const HeaderWrapper = ({ style, children }) => {
  return (
    <SHeaderWrapper
      style={style}
    >
      {children}
    </SHeaderWrapper>
  )
}

HeaderWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default HeaderWrapper
