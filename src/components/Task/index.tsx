import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  name,
  priority,
  cellphone: cellphoneOriginal,
  email: emailOriginal,
  description: descriptionOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const isNotEmpty = (value: string | number) => {
      return value.toString().trim().length > 0
    }

    if (
      isNotEmpty(descriptionOriginal) &&
      isNotEmpty(cellphoneOriginal) &&
      isNotEmpty(emailOriginal)
    ) {
      setDescription(descriptionOriginal)
      setCellphone(String(cellphoneOriginal))
      setEmail(emailOriginal)
    }
  }, [descriptionOriginal, cellphoneOriginal, emailOriginal])

  function cancelEdit() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
    setCellphone(String(cellphoneOriginal))
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.InputDescription
        disabled={!isEditing}
        type="tel"
        value={cellphone}
        placeholder="Type your phone"
        onChange={(event) => setCellphone(event.target.value)}
      />
      <S.InputDescription
        disabled={!isEditing}
        type="email"
        value={email}
        placeholder="Type your email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <S.InputDescription
        disabled={!isEditing}
        type="text"
        value={description}
        placeholder="Type your description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.SideAction>
        {isEditing ? (
          <>
            <S.BtnSave
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    priority,
                    cellphone: cellphoneOriginal,
                    email: emailOriginal,
                    description: descriptionOriginal,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </S.BtnSave>
            <S.BtnCancelRemove onClick={cancelEdit}>Cancel</S.BtnCancelRemove>
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
