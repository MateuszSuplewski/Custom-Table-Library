import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import ClickableIcon from '../styled/ClickableIcon'
import FilterWrapper from '../styled/FilterWrapper'

const GlobalFilter = ({ handleFilterChange, filterPhrase }) => {
  return (
    <FilterWrapper>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        data-testid={'filterIcon--search'}
      />
      <input
        type={'text'}
        onChange={(e) => handleFilterChange(e)}
        value={filterPhrase}
        placeholder={'Search'}
        style={{ border: 'none', outline: 'none' }}
      />
      <ClickableIcon
        data-testid={'filterIcon--clear'}
        icon={faSquareXmark}
        onClick={(e) => handleFilterChange(e, true)}
        size={'1.25rem'}
        isActive={filterPhrase}
        isDisabled={!filterPhrase}
      />
    </FilterWrapper>
  )
}

GlobalFilter.propTypes = {
  filterPhrase: PropTypes.string,
  handleFilterChange: PropTypes.func
}

export default GlobalFilter
