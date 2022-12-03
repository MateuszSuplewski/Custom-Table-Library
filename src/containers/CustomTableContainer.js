import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { paginationContext, globalFilterContext, columnFilterContext, sortContext } from '../context/mainContexts'
import useColumnsFilter from '../hooks/useColumnsFilter'
import useGlobalFilter from '../hooks/useGlobalFilter'
import useSort from '../hooks/useSort'
import CustomTable from '../components/CustomTable'

export const CustomTableContainer = ({ title, columns, data, initialLimit = 3, filtering = 'bothFilters', options = [1, 2, 3, 5] }) => {
  const [applySorting, sorting, sortByColumn] = useSort(data)
  const [filterPhrase, setFilterPhrase, filterByPhrase] = useGlobalFilter(data)
  const [setColFilterPhrases, colFilterPhrases, filterByColumnsPhrase] = useColumnsFilter(columns, data)
  const [processedData, setProcessedData] = useState(data)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(initialLimit)
  const begin = (page - 1) * limit
  const end = page * limit

  useEffect(() => {
    const sortedData = sortByColumn(data)
    let globalFilteredData = []
    let columnsFilteredData = []
    switch (filtering) {
      case 'bothFilters':
        globalFilteredData = filterByColumnsPhrase(sortedData)
        columnsFilteredData = filterByPhrase(globalFilteredData)
        return setProcessedData(columnsFilteredData)
      case 'globalFilter':
        globalFilteredData = filterByPhrase(sortedData)
        return setProcessedData(globalFilteredData)
      case 'columnFilter':
        columnsFilteredData = filterByColumnsPhrase(sortedData)
        return setProcessedData(columnsFilteredData)
      default:
        globalFilteredData = filterByColumnsPhrase(sortedData)
        columnsFilteredData = filterByPhrase(globalFilteredData)
        return setProcessedData(columnsFilteredData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting, filterPhrase, colFilterPhrases])

  const handleSortChange = (field, type) => {
    setPage(1)
    applySorting(field, type)
  }

  const handleGlobalFilterChange = (e, clear) => {
    setPage(1)
    if (clear) return setFilterPhrase('')
    setFilterPhrase(e.target.value)
  }

  const handleColFilterChange = (e, field) => {
    setPage(1)
    setColFilterPhrases((prevColFilters) => { return { ...prevColFilters, [field]: e.target.value } })
  }

  const handleRowsPerPageChange = (e) => {
    setPage(1)
    setLimit(e.target.value)
  }

  return (
    <paginationContext.Provider value={{ page, setPage, limit, handleRowsPerPageChange, begin, end }}>
      <globalFilterContext.Provider value={{ filterPhrase, handleGlobalFilterChange }}>
        <columnFilterContext.Provider value={{ colFilterPhrases, handleColFilterChange }}>
          <sortContext.Provider value={{ sorting, handleSortChange }}>
            <CustomTable
              processedData={processedData}
              columns={columns}
              title={title}
              filtering={filtering}
              options={options}
            />
          </sortContext.Provider>
        </columnFilterContext.Provider>
      </globalFilterContext.Provider>
    </paginationContext.Provider>
  )
}

CustomTableContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  initialLimit: PropTypes.number,
  filtering: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number)
}

export default CustomTableContainer
