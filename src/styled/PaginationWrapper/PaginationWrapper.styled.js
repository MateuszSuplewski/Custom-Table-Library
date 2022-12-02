import styled from 'styled-components'

const DefaultSPaginationWrapper = styled.div`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 white-space: nowrap;
 overflow-x: auto;
 padding: 0 1rem;
 gap: 1rem;
`

const SPaginationWrapper = styled(DefaultSPaginationWrapper)(({ style }) => style)

export default SPaginationWrapper
