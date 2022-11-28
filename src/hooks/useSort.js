import { useEffect, useState } from 'react'

const useSort = (data) => {
  const [sortedData, setSortedData] = useState(data)
  const [sorting, setSorting] = useState({ field: null, order: null, type: null })

  const applySorting = (field, type) => {
    if (sorting.field === field) return setSorting({ field: field, order: sorting.order === 'ASC' ? 'DESC' : 'ASC', type: type })
    setSorting({ field: field, order: 'ASC', type: type })
  }

  const sortByColumn = () => {
    const { field, type, order } = sorting
    if (!field) return setSortedData(data)

    const sortByNumber = (a, b) => Number(a[field]) - Number(b[field])
    const sortByText = (a, b) => {
      const fieldA = a[field].toUpperCase()
      const fieldB = b[field].toUpperCase()
      if (fieldA < fieldB) return -1
      if (fieldA > fieldB) return 1
      return 0
    }

    const preparedData = type === 'numeric' ? [...data].sort(sortByNumber) : [...data].sort(sortByText)
    const sortedDataByOrder = order === 'ASC' ? preparedData : preparedData.reverse()
    setSortedData(sortedDataByOrder)
  }

  useEffect(() => {
    sortByColumn()
  }, [sorting])

  return [applySorting, sortedData, setSortedData]
}

export default useSort
