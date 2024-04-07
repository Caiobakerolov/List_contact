import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../Utils/enums/task'
import { Btn } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  parameter: 'priority'
}

function returnBackground(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.FRIENDS) return variables.blue
    if (props.priority === enums.Priority.FAMILY) return variables.purple
    if (props.priority === enums.Priority.WORK) return variables.yellow
    if (props.priority === enums.Priority.FAVORITE) return variables.pink
    if (props.priority === enums.Priority.EMERGENCY) return variables.brownRed
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: ${variables.grayLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Tag = styled.span<TagProps>`
  color: ${variables.white};
  background-color: ${(props) => returnBackground(props)};
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 16px;
`

export const InputDescription = styled.input`
  color: ${variables.grayDark};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const SideAction = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BtnCancelRemove = styled(Btn)`
  background-color: ${variables.red};
`
