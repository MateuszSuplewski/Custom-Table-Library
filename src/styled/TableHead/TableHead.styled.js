import styled from 'styled-components'

const DefaultSTableHead = styled.thead`
`

const STableHead = styled(DefaultSTableHead)(({ style }) => style)

export default STableHead
