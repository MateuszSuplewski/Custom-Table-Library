import { useState } from 'react'

const useFilter = (initialData) => {
  const [filterPhrase, setFilterPhrase] = useState('')
  // const [filteredData, setFilteredData] = useState(initialData)

  const filterCell = (cell) => cell.toUpperCase().includes(filterPhrase.toUpperCase())

  const filterByPhrase = (data = initialData) => {
    const dataFilteredByPhrase = data.filter((row) => {
      const rowCellsContent = Object.values(row)
      return rowCellsContent.some(filterCell)
    })
    // setFilteredData(dataFilteredByPhrase) // chyba do wyjebania tez
    return dataFilteredByPhrase
  }

  // useEffect(() => {
  //   filterByPhrase()
  // }, [filterPhrase])

  return [filterPhrase, setFilterPhrase, filterByPhrase]
}

export default useFilter
