import styled from 'styled-components'

const DefaultSInput = styled.input`
  outline: none;
  border: none;
`

const SInputContainer = styled(DefaultSInput)(({ style }) => style)

export default SInputContainer
