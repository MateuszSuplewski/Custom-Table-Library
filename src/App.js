import React from 'react'
import CustomTable from './containers/CustomTable'
import { columns, data } from './data/tableData'

const App = () => {
  return (
    <CustomTable
      title={'Basic example of table'}
      columns={columns}
      data={data}
      limit={2}
    />
  )
}

export default App
