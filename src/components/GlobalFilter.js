import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { globalFilterContext } from '../context/mainContexts'
import ClickableIcon from '../styled/singleElements/ClickableIcon'
import FilterWrapper from '../styled/wrappers/FilterWrapper'
import Input from '../styled/singleElements/Input/Input'

const GlobalFilter = () => {
  const { handleGlobalFilterChange, filterPhrase } = React.useContext(globalFilterContext)
  return (
    <FilterWrapper style={{ minWidth: 'auto' }}>
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
