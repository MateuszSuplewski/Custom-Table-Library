import styled from 'styled-components'

const DefaultSTable = styled.table`
border-collapse: collapse;
margin: 0.25rem auto;
width: 100%;
-webkit-box-shadow: 0px 1px 6px -1px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 1px 6px -1px rgba(66, 68, 90, 1);
box-shadow: 0px 1px 6px -1px rgba(66, 68, 90, 1);
`

const STable = styled(DefaultSTable)(({ style }) => style)

export default STable
