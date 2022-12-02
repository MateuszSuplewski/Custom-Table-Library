import styled from 'styled-components'

const DefaultSTableRow = styled.tr`
    &:hover {
      // background-color: ${({ theme }) => theme.rowHoverColor};
    }
`

const STableRow = styled(DefaultSTableRow)(({ style }) => style)

export default STableRow
