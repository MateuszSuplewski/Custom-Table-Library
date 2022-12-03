
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { paginationContext, globalFilterContext, columnFilterContext, sortContext } from '../mainContext'
import useColumnsFilter from '../hooks/useColumnsFilter'
import useGlobalFilter from '../hooks/useGlobalFilter'
import useSort from '../hooks/useSort'
import TableBodyPage from './TableBodyPage'
import Pagination from './Pagination'
import GlobalFilter from './GlobalFilter'
import ColumnFilter from './ColumnFilter'
import TableHeader from './TableHeader'
import TableBodyStatus from './TableBodyStatus'
import Title from '../styled/Title'
import TableWrapper from '../styled/TableWrapper'
import HeaderWrapper from '../styled/HeaderWrapper.js'
import Table from '../styled/Table'
import TableBody from '../styled/TableBody'

export const CustomTable = ({ title, columns, data, initialLimit = 3, filtering = 'both', options = [1, 2, 3, 5] }) => {
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
      case 'both':
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
  }, [sorting, filterPhrase, colFilterPhrases])

  const handleSortChange = (field, type) => {
    applySorting(field, type)
    setPage(1)
  }

  const handleGlobalFilterChange = (e, clear) => {
    setPage(1)
    if (clear) return setFilterPhrase('')
    setFilterPhrase(e.target.value)
  }

  const handleColFilterChange = (e, field) => {
    setColFilterPhrases((prevColFilters) => { return { ...prevColFilters, [field]: e.target.value } })
    setPage(1)
  }

  return (
    <paginationContext.Provider value={{ page, setPage, limit, setLimit, begin, end }}>
      <globalFilterContext.Provider value={{ filterPhrase, handleGlobalFilterChange }}>
        <columnFilterContext.Provider value={{ colFilterPhrases, handleColFilterChange }}>
          <sortContext.Provider value={{ sorting, handleSortChange }}>
            <div style={{ padding: '2rem' }}>
              <HeaderWrapper>
                {(filtering === 'globalFilter' || filtering === 'both') && <GlobalFilter />}
                <Title content={title} />
              </HeaderWrapper>
              <TableWrapper>
                <Table>
                  <TableHeader columns={columns} />
                  <TableBody>
                    {(filtering === 'columnFilter' || filtering === 'both') && <ColumnFilter columns={columns} />}
                    {
                      processedData.length !== 0 ?
                        <TableBodyPage data={processedData} />
                        :
                        <TableBodyStatus
                          content={'No matching data found'}
                          maxLength={columns.length}
                        />
                    }
                  </TableBody>
                </Table>
              </TableWrapper>
              <Pagination
                dataLength={processedData.length}
                options={options}
              />
            </div>
          </sortContext.Provider>
        </columnFilterContext.Provider>
      </globalFilterContext.Provider>
    </paginationContext.Provider>
  )
}

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  initialLimit: PropTypes.number,
  filtering: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number)
}

export default CustomTable
