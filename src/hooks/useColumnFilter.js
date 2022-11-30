import { useEffect, useState } from 'react'

const useColumnFilter = (headerData, bodyData) => {
  const [columnFilteredData, setColumnFilteredData] = useState(bodyData)
  const colNames = Object.values(headerData).reduce((obj, item) => {
    return {
      ...obj,
      [item.field]: ''
    }
  }, {})

  const [colFilters, setColFilters] = useState(colNames)
  const sortIt = () => {
    const colFilterPhrases = Object.values(colFilters)

    const dataFilteredByColumns = bodyData.filter((row) => {
      const rowCellsContent = Object.values(row)
      return rowCellsContent.every((cell, index) => cell.toUpperCase().includes(colFilterPhrases[index].toUpperCase()))
    })

    setColumnFilteredData(dataFilteredByColumns)
  }

  useEffect(() => {
    sortIt()
  }, [colFilters])

  return [setColFilters, colFilters, columnFilteredData, setColumnFilteredData]
}

export default useColumnFilter
