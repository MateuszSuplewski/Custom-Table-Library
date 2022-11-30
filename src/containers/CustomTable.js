import React, { useEffect } from 'react'
import Table from '../styled/Table'
import TableBody from '../styled/TableBody'
import TableCell from '../styled/TableCell'
import TableHead from '../styled/TableHead'
import TableRow from '../styled/TableRow'
import useFilter from '../hooks/useFilter'
import useSort from '../hooks/useSort'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import Sorter from './Sorter'
import GlobalFilter from './GlobalFilter'

export const CustomTable = ({ title, columns, data, limit = 3 }) => {
  const [filteredData, filterPhrase, setFilterPhrase] = useFilter(data)
  const [applySorting, sortedData, setSortedData, sorting] = useSort(filteredData)

  useEffect(() => {
    setSortedData(filteredData)
  }, [filteredData])

  return (
    <div>
      <Table title={title}>
        <TableHead>
          <TableRow>
            {columns.map(({ title, field, type }, index) => (
              <TableCell
                onClick={() => applySorting(field, type)}
                key={index}
                type={'head'}
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
          <Pagination limit={limit}>
            {sortedData.map((row, rowIndex) => {
              const rowCellsContent = Object.values(row)
              return (
                <TableRow key={rowIndex}>
                  {rowCellsContent.map((cell, cellIndex) => (
                    <TableCell key={rowIndex + cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              )
            })}
          </Pagination>
        </TableBody>
      </Table>
      <GlobalFilter
        setFilterPhrase={setFilterPhrase}
        filterPhrase={filterPhrase}
      />
    </div>
  )
}

CustomTable.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  limit: PropTypes.number
}

export default CustomTable
