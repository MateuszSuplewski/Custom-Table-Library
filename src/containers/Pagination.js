import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ children, limit }) => {
  const [page, setPage] = useState(1)
  const length = children.length
  const begin = (page - 1) * limit
  const end = page * limit
  const pages = Math.ceil(length / limit)

  return (
    <>
      {children.slice(begin, end)}
      <tr>
        <td>
          {[...Array(pages).keys()].map((page) => (
            <span
              key={page + 1}
              onClick={() => setPage(page + 1)}
              data-testid={'pageNumber'}
            >
              {page + 1}
            </span>
          ))}
        </td>
      </tr>
    </>
  )
}

Pagination.propTypes = {
  children: PropTypes.node,
  limit: PropTypes.number
}

export default Pagination
