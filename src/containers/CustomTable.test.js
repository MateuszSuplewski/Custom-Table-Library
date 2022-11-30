import { render, screen } from '@testing-library/react'
import { tableHeadersTest, tableContentTest } from '../dataToTests'
import CustomTable from './CustomTable'
import React from 'react'

const setup = (limit = 3) => {
  return render(
    <CustomTable
      title={'Basic example of table'}
      columns={tableHeadersTest}
      data={tableContentTest}
      limit = {limit}
    />
  )
}

describe('Table Initial render', () => {
  it('Should render title', () => {
    setup()
    expect.assertions(1)

    expect(screen.getByText('Basic example of table')).toBeInTheDocument()
  })

  it('Should render heading', () => {
    setup()
    expect.assertions(2)

    tableHeadersTest.forEach((header) => expect(screen.getByText(header.title)).toBeInTheDocument())
  })

  it('Should render data when passing 1 page data', () => {
    setup()
    expect.assertions(6)

    tableContentTest.forEach((row) => {
      const rowCellsContent = Object.values(row)
      rowCellsContent.forEach(cell => expect(screen.getByText(cell)).toBeInTheDocument())
    })
  })

  it('Should render column sorter', () => {
    setup()
    expect.assertions(3)

    const sortButtons = screen.getAllByTestId('sortIcon--asc')
    expect(sortButtons).toHaveLength(2)
    sortButtons.forEach(button => expect(button).toBeInTheDocument())
  })

  it('Should render global filter', () => {
    setup()
    expect.assertions(4)

    const globalFilter = screen.getByPlaceholderText('Search')
    expect(globalFilter).toBeInTheDocument()
    expect(globalFilter).toHaveValue('')

    expect(screen.getByTestId('filterIcon--search')).toBeInTheDocument()
    expect(screen.getByTestId('filterIcon--clear')).toBeInTheDocument()
  })

  it('Should render pagination', () => {
    setup(1)
    expect.assertions(4)

    const pages = screen.getAllByTestId('pageNumber')
    expect(pages).toHaveLength(3)
    pages.forEach((page) => expect(page).toBeInTheDocument())
  })
})
