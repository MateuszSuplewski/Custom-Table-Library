import { render, screen, waitFor } from '@testing-library/react'
import { columns, data } from '../data/testData'
import CustomTable from '../containers/CustomTable'
import React from 'react'
import userEvent from '@testing-library/user-event'

const setup = (limit = 3) => {
  return render(
    <CustomTable
      title={'Basic example of table'}
      columns={columns}
      data={data}
      initialLimit = {limit}
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

    columns.forEach((header) => expect(screen.getByText(header.title)).toBeInTheDocument())
  })

  it('Should render data when passing 1 page data', () => {
    setup()
    expect.assertions(6)

    data.forEach((row) => {
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
    setup()
    expect.assertions(2)

    expect(screen.getByTestId('pageIcon--next')).toBeInTheDocument()
    expect(screen.getByTestId('pageIcon--prev')).toBeInTheDocument()
  })
})

describe('Table Actions', () => {
  it('Should filter data if input passed', () => {
    setup()
    expect.assertions(5)

    const globalFilter = screen.getByPlaceholderText('Search')
    userEvent.type(globalFilter, 'Chin')
    expect(globalFilter).toHaveValue('Chin')

    expect(screen.getByText('China')).toBeInTheDocument()
    expect(screen.getByText('1403500365')).toBeInTheDocument()

    expect(screen.queryByText('India')).not.toBeInTheDocument()
    expect(screen.queryByText('1324171354')).not.toBeInTheDocument()
  })

  it('Should render initial data & clear input if clear input data button clicked', async () => {
    setup()
    expect.assertions(7)

    const globalFilter = screen.getByPlaceholderText('Search')
    userEvent.type(globalFilter, 'Chin')

    const clearButton = screen.getByTestId('filterIcon--clear')
    userEvent.click(clearButton)
    expect(globalFilter).toHaveValue('')

    await waitFor(() => {
      data.forEach((row) => {
        const rowCellsContent = Object.values(row)
        rowCellsContent.forEach(cell => expect(screen.getByText(cell)).toBeInTheDocument())
      })
    })
  })

  it('Should render informing text if no data found by filter', async () => {
    setup()
    expect.assertions(1)

    const globalFilter = screen.getByPlaceholderText('Search')
    userEvent.type(globalFilter, 'Chinaaa')
    expect(screen.getByText('No matching data found')).toBeInTheDocument()
  })

  it('Should sort data ASC if sorter clicked', async () => {
    setup()
    const sortButtons = screen.getAllByTestId('sortIcon--asc')
    userEvent.click(sortButtons[1])

    const dataContainer = document.querySelector('tbody')
    const rows = dataContainer.querySelectorAll('tr')
    await waitFor(() => {
      expect(rows[1].children[0].textContent).toBe('Italy')
      expect(rows[1].children[1].textContent).toBe('60483973')
    })
  })

  it('Should sort data DSC if sorter clicked twice', async () => {
    setup()

    const sortButtons = screen.getAllByTestId('sortIcon--asc')
    userEvent.click(sortButtons[1])
    userEvent.click(sortButtons[1])

    const dataContainer = document.querySelector('tbody')
    const rows = dataContainer.querySelectorAll('tr')
    await waitFor(() => {
      expect(rows[1].children[0].textContent).toBe('China')
      expect(rows[1].children[1].textContent).toBe('1403500365')
    })
  })

  it('Should change page if other page selected', () => {
    setup(1)
    expect.assertions(4)

    const nextPage = screen.getByTestId('pageIcon--next')
    userEvent.click(nextPage)

    const dataContainer = document.querySelector('tbody')
    const rows = dataContainer.querySelectorAll('tr')

    expect(rows[1].children[0].textContent).toBe('China')
    expect(rows[1].children[1].textContent).toBe('1403500365')

    expect(screen.queryByText('India')).not.toBeInTheDocument()
    expect(screen.queryByText('1324171354')).not.toBeInTheDocument()
  })
})
