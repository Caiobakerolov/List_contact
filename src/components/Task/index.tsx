import { useState } from 'react'
import * as S from './styles'

type Props = {
  name: string
  priority: string
  cellphone: number
  email: string
}

const Task = ({ name, priority, cellphone, email }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Description value={cellphone} />
      <S.Description value={email} />
      <S.SideAction>
        {isEditing ? (
          <>
            <S.Btn>Save</S.Btn>
            <S.Btn onClick={() => setIsEditing(false)}>Cancel</S.Btn>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setIsEditing(true)}>Edit</S.Btn>
            <S.Btn>Remove</S.Btn>
          </>
        )}
      </S.SideAction>
    </S.Card>
  )
}

export default Task
