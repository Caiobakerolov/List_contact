import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ name, priority, cellphone, email, description, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BtnCancelRemove onClick={() => dispatch(remove(id))}>
              Remove
            </S.BtnCancelRemove>
          </>
        )}
      </S.SideAction>
    </S.Card>
  )
}

export default Task
