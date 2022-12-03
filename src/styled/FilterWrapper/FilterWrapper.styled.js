import styled from 'styled-components'

const DefaultSFilterWrapper = styled.div`
 display: flex;
 white-space: nowrap;
 flex-wrap: nowrap;
 align-items: center;
 gap: 0.5rem;
 border-bottom: 2px solid black;
 width: 225px;
 justify-content: space-between;
 margin: 0 0.5rem;
 max-width: 225px;
 min-width: 100px;
`

const SFilterWrapper = styled(DefaultSFilterWrapper)(({ style }) => style)

export default SFilterWrapper
