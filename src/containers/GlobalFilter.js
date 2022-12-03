import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { globalFilterContext } from '../mainContext'
import ClickableIcon from '../styled/ClickableIcon'
import FilterWrapper from '../styled/FilterWrapper'
import Input from '../styled/Input/Input'

const GlobalFilter = () => {
  const { handleGlobalFilterChange, filterPhrase } = React.useContext(globalFilterContext)
  return (
    <FilterWrapper>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        data-testid={'filterIcon--search'}
      />
      <Input
        type={'text'}
        onChange={(e) => handleGlobalFilterChange(e)}
        value={filterPhrase}
        placeholder={'Search'}
      />
      <ClickableIcon
        data-testid={'filterIcon--clear'}
        icon={faSquareXmark}
        onClick={(e) => handleGlobalFilterChange(e, true)}
        size={'lg'}
        isActive={filterPhrase.length > 0}
        isDisabled={!(filterPhrase.length > 0)}
      />
    </FilterWrapper>
  )
}

export default GlobalFilter
