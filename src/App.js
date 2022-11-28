/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Table from './styled/Table'
import TableBody from './styled/TableBody'
import TableCell from './styled/TableCell'
import TableHead from './styled/TableHead'
import TableRow from './styled/TableRow'
import { tableHeaders, tableContent } from './tableData'
import useFilter from './hooks/useFilter'
import useSort from './hooks/useSort'

export const App = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(3)
  const startRowNumber = (page - 1) * rowsPerPage
  const endRowNumber = page * rowsPerPage
  const [filteredData, filterPhrase, setFilterPhrase] = useFilter(tableContent)
  const [applySorting, sortedData, setSortedData] = useSort(filteredData)

  const minPage = 1
  const maxPage = Math.ceil(sortedData.length / rowsPerPage)

  useEffect(() => {
    setSortedData(filteredData)
  }, [filteredData])

  return (
    <div>
      <Table title={'Basic example of table'}>
        <TableHead>
          <TableRow>
            {
              tableHeaders.map(({ title, field, type }, index) => (
                <TableCell
                  onClick={() => applySorting(field, type)}
                  key={index}
                  type={'head'}
                >{title}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
              sortedData.slice(startRowNumber, endRowNumber) // Paginacja
                .map((row, rowIndex) => {
                  const rowCellsContent = Object.values(row)
                  console.log(row)
                  return (
                    <TableRow key={rowIndex}>
                      {
                  rowCellsContent.map((cell, cellIndex) => (
                    <TableCell key={rowIndex + cellIndex}>{cell}</TableCell>
                  ))
                  }
                    </TableRow>
                  )
                })
            }
        </TableBody>
      </Table>
      <button onClick={() => { setPage(lastvalue => lastvalue + 1) }}>+</button>
      <button onClick={() => { setPage(lastvalue => lastvalue - 1) }}>-</button>
      <input
        type={'text'}
        onChange={(e) => setFilterPhrase(e.target.value)}
        value={filterPhrase}
      >
      </input>
    </div>
  )
}

export default App
