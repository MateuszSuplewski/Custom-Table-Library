import React from 'react'
import PropTypes from 'prop-types'
import SInput from './Input.styled'

const Input = ({ style, type = 'text', value, onChange, ...otherProps }) => {
  return (
    <SInput
      style={style}
      type={type}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  style: PropTypes.object
}

export default Input
