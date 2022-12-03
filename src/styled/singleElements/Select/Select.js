import React from 'react'
import PropTypes from 'prop-types'
import SSelect from './Select.styled'

const Select = ({ style, value, onChange, options, ...otherProps }) => {
  return (
    <SSelect
      style={style}
      value={value}
      onChange={onChange}
      {...otherProps}
    >
      {options.map((symbol, index) => (
        <option
          key={index}
          value={symbol}
        >
          {symbol}
        </option>
      ))}
    </SSelect>
  )
}

Select.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  style: PropTypes.object
}

export default Select
