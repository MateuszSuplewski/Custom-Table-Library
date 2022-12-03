import { useState } from 'react'

const useColumnsFilter = (headerData, initialData) => {
  const colNames = Object.values(headerData).reduce((obj, item) => {
    return {
      ...obj,
      [item.field]: ''
    }
  }, {})

  const [colFilterPhrases, setColFilterPhrases] = useState(colNames)

  const filterByColumnsPhrase = (data = initialData) => {
    const colFilterFields = Object.values(colFilterPhrases)

    const dataFilteredByColumns = [...data].filter((row) => {
      const rowCellsContent = Object.values(row)
      return rowCellsContent.every((cell, index) => cell.toUpperCase().includes(colFilterFields[index].toUpperCase()))
    })

    return dataFilteredByColumns
  }

  return [setColFilterPhrases, colFilterPhrases, filterByColumnsPhrase]
}

export default useColumnsFilter
