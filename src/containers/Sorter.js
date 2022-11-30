import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Sorter = ({ isChosenSort, order }) => {
  return (
    isChosenSort
      ? order === 'DESC'
        ? <FontAwesomeIcon
            data-testid={'sortIcon--dsc'}
            icon={faSortDown}
          />
        : <FontAwesomeIcon
            data-testid={'sortIcon--asc'}
            icon={faSortUp}
          />
      : <FontAwesomeIcon
          data-testid={'sortIcon--asc'}
          icon={faSortUp}
          opacity={0.2}
        />
  )
}

Sorter.propTypes = {
  order: PropTypes.string,
  isChosenSort: PropTypes.bool
}

export default Sorter
