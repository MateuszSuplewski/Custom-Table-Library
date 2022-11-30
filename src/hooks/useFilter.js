import { useEffect, useState } from 'react'

const useFilter = (data) => {
  const [filterPhrase, setFilterPhrase] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const filterCell = (cell) => cell.toUpperCase().includes(filterPhrase.toUpperCase())

  const filterByPhrase = () => {
    const dataFilteredByPhrase = data.filter((row) => {
      const rowCellsContent = Object.values(row)
      return rowCellsContent.some(filterCell)
    })
    setFilteredData(dataFilteredByPhrase)
  }

  useEffect(() => {
    filterByPhrase()
  }, [filterPhrase])

  return [filteredData, filterPhrase, setFilterPhrase]
}

export default useFilter
