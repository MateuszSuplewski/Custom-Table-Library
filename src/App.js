import React from 'react'
import CustomTableContainer from './containers/CustomTableContainer'
import { columns, data } from './data/tableData'

const App = () => {
  return (
    <CustomTableContainer
      title={'Basic example of table'}
      columns={columns}
      data={data}
      initialLimit={3}
      filtering={'bothFilters'}
      options={[1, 2, 3, 5]}
    />
  )
}

export default App
