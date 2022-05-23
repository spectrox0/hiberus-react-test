import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ReactElement } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontSize: '1em',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    fontWeight: '900',
    color: theme.palette.text.disabled,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1em',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

type Props<T extends object> = { data: T[]; headers: string[] }
export const CustomTable = <T extends object>({ headers, data }: Props<T>): ReactElement => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {headers.map((item, i) => (
              <StyledTableCell key={i} align={'left'}>
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <StyledTableRow key={i}>
              {Object.values(row).map((value, i) => (
                <StyledTableCell key={i} align='left'>
                  {value}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
