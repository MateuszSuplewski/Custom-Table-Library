import styled from 'styled-components'

const DefaultSHeaderCell = styled.th`
`

const DefaultSDataCell = styled.td`
`

const SHeaderCell = styled(DefaultSHeaderCell)(({ style }) => style)
const SDataCell = styled(DefaultSDataCell)(({ style }) => style)

export { SDataCell, SHeaderCell }
