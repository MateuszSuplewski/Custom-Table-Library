import React from 'react'
import PropTypes from 'prop-types'
import SInput from './Input.styled'

const Input = ({ style, type, value, onChange, ...otherProps }) => {
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
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
