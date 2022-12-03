import styled from 'styled-components'

const DefaultSTableWrapper = styled.div`
  overflow-x: auto;
  padding: 0.2rem;
`
const STableWrapper = styled(DefaultSTableWrapper)(({ style }) => style)

export { STableWrapper }
