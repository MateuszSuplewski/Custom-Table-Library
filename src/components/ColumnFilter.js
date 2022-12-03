import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGenderless } from '@fortawesome/free-solid-svg-icons'
import { columnFilterContext } from '../context/mainContexts'
import FilterWrapper from '../styled/wrappers/FilterWrapper'
import Input from '../styled/singleElements/Input/Input'
import TableCell from '../styled/tableItems/TableCell'
import TableRow from '../styled/tableItems/TableRow'

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
