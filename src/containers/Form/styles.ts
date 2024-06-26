import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormRegister = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variables.grayDark2};

  textarea {
    resize: none;
    margin-bottom: 16px;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
