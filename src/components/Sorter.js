import React from 'react'
import PropTypes from 'prop-types'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import ClickableIcon from '../styled/singleElements/ClickableIcon'

const Sorter = ({ isActiveSort, order }) => {
  return (
    <ClickableIcon
      data-testid={order === 'DESC' ? 'sortIcon--dsc' : 'sortIcon--asc'}
      icon={order === 'DESC' && isActiveSort ? faSortDown : faSortUp}
      isActive={isActiveSort}
      style={{ paddingLeft: '0.5rem' }}
    />
  )
}

Sorter.propTypes = {
  order: PropTypes.string,
  isActiveSort: PropTypes.bool.isRequired
}

export default Sorter
