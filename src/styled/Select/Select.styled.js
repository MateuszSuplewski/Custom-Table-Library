import styled from 'styled-components'

const DefaultSSelect = styled.select`
  outline: none;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.7);
  margin-left: 0.5rem;
  min-width: 50px;
`

const SSelect = styled(DefaultSSelect)(({ style }) => style)

export default SSelect
