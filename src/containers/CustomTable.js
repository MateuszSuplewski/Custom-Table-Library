import React, { useEffect, useState } from 'react'
import Table from '../styled/Table'
import TableBody from '../styled/TableBody'
import TableCell from '../styled/TableCell'
import TableHead from '../styled/TableHead'
import TableRow from '../styled/TableRow'
import useFilter from '../hooks/useFilter'
import useSort from '../hooks/useSort'
import TableBodyPage from './TableBodyPage'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Sorter from './Sorter'
import GlobalFilter from './GlobalFilter'
import TableWrapper from '../styled/TableWrapper'
import paginationContext from '../mainContext'
import TableBodyStatus from './TableBodyStatus'
import Title from '../styled/Title'
import HeaderWrapper from '../styled/HeaderWrapper.js'

export const CustomTable = ({ title, columns, data, limit = 3 }) => {
  const [filterPhrase, setFilterPhrase, filterByPhrase] = useFilter(data)
  const [applySorting, sorting, sortByColumn] = useSort(data)
  const [dataAfterAll, setDataAfterAll] = useState(data)
  const [page, setPage] = useState(1)
  const [newLimit, setNewLimit] = useState(limit)
  const begin = (page - 1) * newLimit
  const end = page * newLimit

  // useEffect(() => {
  //   setSortedData(filteredData)
  // }, [filteredData])

  useEffect(() => {
    const newSortedData = sortByColumn(data)
    const newFilteredData = filterByPhrase(newSortedData)
    setDataAfterAll(newFilteredData)
  }, [sorting, filterPhrase])

  const handleSortChange = (field, type) => {
    applySorting(field, type)
    setPage(1)
  }

  const handleFilterChange = (e, clear) => {
    setPage(1)
    if (clear) return setFilterPhrase('')
    setFilterPhrase(e.target.value)
  }

  return (
    <paginationContext.Provider value={{ page, setPage, newLimit, setNewLimit, begin, end }}>
      <div style={{ padding: '2rem' }}>
        <HeaderWrapper>
          <GlobalFilter
            handleFilterChange={handleFilterChange}
            filterPhrase={filterPhrase}
          />
          <Title content={title}/>
        </HeaderWrapper>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(({ title, field, type }, index) => (
                  <TableCell
                    onClick={() => handleSortChange(field, type)}
                    key={index}
                    type={'head'}
                    align={'left'}
                  >
                    {title}
                    <Sorter
                      isChosenSort = {sorting.field === field}
                      order={sorting.order}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataAfterAll.length !== 0 ?
                <TableBodyPage data={dataAfterAll}/>
                :
                <TableBodyStatus
                  content={'No matching data found'}
                  maxLength={columns.length}
                />
            }
            </TableBody>
          </Table>
        </TableWrapper>
        <Pagination dataLength={dataAfterAll.length} />
      </div>
    </paginationContext.Provider>
  )
}

CustomTable.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  limit: PropTypes.number
}

export default CustomTable

// Dodac headerr i informacje o braku danych jako osobne komponenty
