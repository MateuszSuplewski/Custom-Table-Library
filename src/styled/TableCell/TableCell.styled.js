import styled, { css } from 'styled-components'

const DefaultSHeaderCell = styled.th`
  padding: 1rem 1rem 1rem 0.7rem;
  // color: ${({ theme }) => theme.secondaryCellColor};
  text-align: ${({ align }) => align};
  white-space: nowrap;
  border-bottom: 1px solid black;
  background-color: #e5e5e5;
  cursor: pointer;
`

const DefaultSDataCell = styled.td`
  // color: ${({ theme }) => theme.primaryCellColor};
  text-align: ${({ align }) => align};
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid black;
  &:hover {
      // background-color: ${({ theme }) => theme.cellHoverColor};
    }
  ${({ sticky }) => sticky ?
  css`
    position: sticky;
    inset-inline-start: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    left: 0;
    border-bottom: none;

    @media screen and (max-width: 426px) {
    flex-wrap: wrap;
  }
  `
  :
  css``}
`
const SHeaderCell = styled(DefaultSHeaderCell)(({ style }) => style)
const SDataCell = styled(DefaultSDataCell)(({ style }) => style)

export { SDataCell, SHeaderCell }
