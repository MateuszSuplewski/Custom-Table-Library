import React from 'react'
import CustomTable from './containers/CustomTable'
import { tableHeaders, tableContent } from './tableData'

const App = () => {
  return (
    <CustomTable
      title={'Basic example of table'}
      columns={tableHeaders}
      data={tableContent}
      limit={5}
    />
  )
}

export default App
