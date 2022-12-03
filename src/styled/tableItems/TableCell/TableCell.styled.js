import styled from 'styled-components'

const DefaultSHeaderCell = styled.th`
  padding: 1rem 1rem 1rem 0.7rem;
  text-align: ${({ align }) => align};
  white-space: nowrap;
  border-bottom: 1px solid black;
  background-color: #e5e5e5;
  cursor: pointer;
`

const DefaultSDataCell = styled.td`
  text-align: ${({ align }) => align};
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid black;
`
const SHeaderCell = styled(DefaultSHeaderCell)(({ style }) => style)
const SDataCell = styled(DefaultSDataCell)(({ style }) => style)

export { SDataCell, SHeaderCell }
