import styled from 'styled-components'

const DefaultSHeaderWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 0 1rem;
 white-space: nowrap;
 overflow-x: auto;
 gap: 0.5rem;
 align-items: center;
`

const SHeaderWrapper = styled(DefaultSHeaderWrapper)(({ style }) => style)

export default SHeaderWrapper
