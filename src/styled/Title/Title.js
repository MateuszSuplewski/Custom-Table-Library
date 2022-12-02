import React from 'react'
import PropTypes from 'prop-types'
import STitle from './Title.styled'

const Title = ({ style, content }) => {
  return (
    <STitle
      style={style}
    >
      {content}
    </STitle>
  )
}

Title.propTypes = {
  style: PropTypes.object,
  content: PropTypes.string
}

export default Title
