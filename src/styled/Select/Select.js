import React from 'react'
import PropTypes from 'prop-types'
import SSelect from './Select.styled'

const Select = ({ style, value, onChange, options }) => {
  return (
    <SSelect
      style={style}
      value={value}
      onChange={onChange}
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
  style: PropTypes.object,
  value: PropTypes.node,
  onChange: PropTypes.func,
  options: PropTypes.array
}

export default Select
