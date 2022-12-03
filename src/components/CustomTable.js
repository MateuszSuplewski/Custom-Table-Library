import React from 'react'
import PropTypes from 'prop-types'
import TableBodyPage from '../components/TableBodyPage'
import Pagination from '../components/Pagination'
import GlobalFilter from '../components/GlobalFilter'
import ColumnFilter from '../components/ColumnFilter'
import TableHeader from '../components/TableHeader'
import TableBodyStatus from '../components/TableBodyStatus'
import Title from '../styled/singleElements/Title'
import TableWrapper from '../styled/wrappers/TableWrapper'
import HeaderWrapper from '../styled/wrappers/HeaderWrapper'
import Table from '../styled/tableItems/Table'
import TableBody from '../styled/tableItems/TableBody'

export const CustomTable = ({ processedData, columns, title, filtering, options }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <HeaderWrapper>
        {(filtering === 'globalFilter' || filtering === 'bothFilters') && <GlobalFilter />}
        <Title content={title} />
      </HeaderWrapper>
      <TableWrapper>
        <Table>
          <TableHeader columns={columns} />
          <TableBody>
            {(filtering === 'columnFilter' || filtering === 'bothFilters') && <ColumnFilter columns={columns} />}
            {processedData.length !== 0
              ? <TableBodyPage data={processedData} />
              : <TableBodyStatus
                  content={'No matching data found'}
                  maxLength={columns.length}
                />}
          </TableBody>
        </Table>
      </TableWrapper>
      <Pagination
        dataLength={processedData.length}
        options={options}
      />
    </div>
  )
}

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  processedData: PropTypes.array.isRequired,
  title: PropTypes.string,
  filtering: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number)
}

export default CustomTable
