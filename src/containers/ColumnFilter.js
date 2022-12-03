import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGenderless } from '@fortawesome/free-solid-svg-icons'
import { columnFilterContext } from '../mainContext'
import FilterWrapper from '../styled/FilterWrapper'
import Input from '../styled/Input/Input'
import TableCell from '../styled/TableCell'
import TableRow from '../styled/TableRow'

const ColumnFilter = ({ columns }) => {
  const { handleColFilterChange, colFilterPhrases } = React.useContext(columnFilterContext)
  return (
    <TableRow>
      {columns.map(({ field }, index) => (
        <TableCell key={index}>
          <FilterWrapper style={{ width: 'auto' }}>
            <FontAwesomeIcon
              icon={faGenderless}
              data-testid={'filterIcon--column'}
              size={'lg'}
            />
            <Input
              value={colFilterPhrases[field]}
              onChange={(e) => handleColFilterChange(e, field)}
              placeholder={'Filter by ' + field}
              style={{ display: 'block', width: '100%' }}
            />
          </FilterWrapper>
        </TableCell>
      ))}
    </TableRow>
  )
}

ColumnFilter.propTypes = {
  columns: PropTypes.array.isRequired
}

export default ColumnFilter
