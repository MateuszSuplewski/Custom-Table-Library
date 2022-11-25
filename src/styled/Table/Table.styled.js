import styled from 'styled-components'

const DefaultSTable = styled.table`
`

const DefaultSTitle = styled.caption`
`

const STable = styled(DefaultSTable)(({ style }) => style)
const STitle = styled(DefaultSTitle)(({ style }) => style)

export { STable, STitle }
