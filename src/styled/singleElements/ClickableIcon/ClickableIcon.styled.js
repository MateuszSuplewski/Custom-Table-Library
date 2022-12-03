import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from 'prop-types'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ size }) => size};
  ${({ $isDisabled }) =>
    $isDisabled
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `};
  ${({ $isActive }) =>
    !$isActive &&
    css`
      opacity: 0.3;
    `}
`

const SClickableIcon = ({ icon, onClick, ...otherProps }) => (
  <StyledFontAwesomeIcon
    icon={icon}
    onClick={onClick}
    {...otherProps}
  />
)

SClickableIcon.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func
}

export default SClickableIcon
