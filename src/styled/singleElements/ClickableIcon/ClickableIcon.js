import React from 'react'
import PropTypes from 'prop-types'
import SClickableIcon from './ClickableIcon.styled'

const ClickableIcon = ({
  icon,
  onClick,
  isDisabled,
  isActive,
  ...otherProps
}) => {
  return (
    <SClickableIcon
      icon={icon}
      onClick={onClick}
      $isDisabled={isDisabled}
      $isActive={isActive}
      {...otherProps}
    />
  )
}

ClickableIcon.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool
}

export default ClickableIcon
