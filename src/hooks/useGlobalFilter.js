import { useState } from 'react'

const useGlobalFilter = (initialData) => {
  const [filterPhrase, setFilterPhrase] = useState('')

  const filterCell = (cell) => cell.toUpperCase().includes(filterPhrase.toUpperCase())

  const filterByPhrase = (data = initialData) => {
    const dataFilteredByPhrase = data.filter((row) => {
      const rowCellsContent = Object.values(row)
      return rowCellsContent.some(filterCell)
    })
    return dataFilteredByPhrase
  }

  return [filterPhrase, setFilterPhrase, filterByPhrase]
}

export default useGlobalFilter
