import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const GlobalFilter = ({ setFilterPhrase, filterPhrase }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        data-testid={'filterIcon--search'}
      />
      <input
        type={'text'}
        onChange={(e) => setFilterPhrase(e.target.value)}
        value={filterPhrase}
        placeholder={'Search'}
      />
      <FontAwesomeIcon
        icon={faSquareXmark}
        size={'xl'}
        onClick={() => setFilterPhrase('')}
        data-testid={'filterIcon--clear'}
      />
    </>
  )
}

GlobalFilter.propTypes = {
  filterPhrase: PropTypes.string,
  setFilterPhrase: PropTypes.func
}

export default GlobalFilter
