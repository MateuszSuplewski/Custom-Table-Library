import React from 'react'
import PropTypes from 'prop-types'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { paginationContext } from '../context/mainContexts'
import Select from '../styled/singleElements/Select'
import PaginationWrapper from '../styled/wrappers/PaginationWrapper'
import ClickableIcon from '../styled/singleElements/ClickableIcon'

const Pagination = ({ dataLength, options }) => {
  const { begin, end, limit, handleRowsPerPageChange, page, setPage } = React.useContext(paginationContext)
  const pages = Math.ceil(dataLength / limit)

  return (
    <PaginationWrapper>
      <ClickableIcon
        data-testid={'pageIcon--prev'}
        icon={faAngleLeft}
        isDisabled={page === 1 || dataLength === 0}
        isActive={page !== 1 && dataLength > 0}
        onClick={() => setPage(page - 1)}
      />
      <ClickableIcon
        data-testid={'pageIcon--next'}
        icon={faAngleRight}
        isDisabled={page === pages || dataLength === 0}
        isActive={page !== pages && dataLength > 0}
        onClick={() => setPage(page + 1)}
      />
      <label>
        {'Rows per page: '}
        <Select
          value={limit}
          onChange={(e) => handleRowsPerPageChange(e)}
          options={options}
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
  dataLength: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Pagination
