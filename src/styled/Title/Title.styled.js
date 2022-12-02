import styled from 'styled-components'

const DefaultSTitle = styled.p`
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
`

const STitle = styled(DefaultSTitle)(({ style }) => style)

export default STitle
