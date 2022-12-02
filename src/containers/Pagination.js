import React from 'react'
import PropTypes from 'prop-types'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Select from '../styled/Select'
import paginationContext from '../mainContext'
import PaginationWrapper from '../styled/PaginationWrapper'
import ClickableIcon from '../styled/ClickableIcon'

const Pagination = ({ dataLength }) => {
  const { begin, end, newLimit, setNewLimit, page, setPage } = React.useContext(paginationContext)
  const pages = Math.ceil(dataLength / newLimit)

  const handleRowsPerPageChange = (e) => {
    setNewLimit(e.target.value)
    setPage(1)
  }

  return (
    <PaginationWrapper>
      <div>
        <ClickableIcon
          data-testid={'pageIcon--prev'}
          icon={faAngleLeft}
          isDisabled={page === 1}
          isActive={page !== 1}
          onClick={() => setPage(page - 1)}
        />
        <ClickableIcon
          data-testid={'pageIcon--next'}
          icon={faAngleRight}
          isDisabled={page === pages}
          isActive={page !== pages}
          onClick={() => setPage(page + 1)}
        />
      </div>
      <label>
        {'Rows per page: '}
        <Select
          value={newLimit}
          onChange={(e) => handleRowsPerPageChange(e)}
          options={[1, 2, 3]}
        >
        </Select>
      </label>
      <div>
        {`${begin + 1}-${end > dataLength ? dataLength : end} of ${dataLength}`}
      </div>
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  dataLength: PropTypes.number
}

export default Pagination
