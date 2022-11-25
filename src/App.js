import React from 'react'
import Table from './styled/Table'
import TableBody from './styled/TableBody'
import TableCell from './styled/TableCell'
import TableHead from './styled/TableHead'
import TableRow from './styled/TableRow'

export const App = () => {
  return (
    <div>
      <Table title={'Basic example of table'}>
        <TableHead>
          <TableRow>
            <TableCell type={'head'}>
              Name
            </TableCell>
            <TableCell type={'head'}>
              Surname
            </TableCell>
            <TableCell type={'head'}>
              Age
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Mateusz
            </TableCell>
            <TableCell>
              Suplewski
            </TableCell>
            <TableCell>
              22
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Dorota
            </TableCell>
            <TableCell>
              Nowak
            </TableCell>
            <TableCell>
              33
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Karol
            </TableCell>
            <TableCell>
              Wernard
            </TableCell>
            <TableCell>
              40
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default App
