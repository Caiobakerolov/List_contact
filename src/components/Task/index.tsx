import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../Utils/enums/task'

type Props = {
  name: string
  priority: enums.Priority
  cellphone: number
  email: string
  description: string
}

const Task = ({ name, priority, cellphone, email, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.InputDescription type="tel" value={cellphone} />
      <S.InputDescription type="email" value={email} />
      <S.InputDescription type="text" value={description} />
      <S.SideAction>
        {isEditing ? (
          <>
            <S.BtnSave>Save</S.BtnSave>
            <S.BtnCancelRemove onClick={() => setIsEditing(false)}>
              Cancel
            </S.BtnCancelRemove>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setIsEditing(true)}>Edit</S.Btn>
            <S.BtnCancelRemove>Remove</S.BtnCancelRemove>
          </>
        )}
      </S.SideAction>
    </S.Card>
  )
}

export default Task
