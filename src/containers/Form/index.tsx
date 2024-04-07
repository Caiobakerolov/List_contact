import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BtnSave, MainContainer, Title } from '../../styles'
import { Field } from '../../styles'
import { FormRegister, Options, Option } from './styles'
import * as enums from '../../Utils/enums/task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [cellphone, setCellPhone] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.FRIENDS)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      register({
        name,
        cellphone,
        email,
        description,
        priority
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New Task</Title>
      <FormRegister onSubmit={registerTask}>
        <Field
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Name"
        />
        <Field
          value={cellphone}
          onChange={({ target }) => setCellPhone(target.value)}
          type="tel"
          placeholder="Phone"
        />
        <Field
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Task description "
        />
        <Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                defaultChecked={priority === enums.Priority.FRIENDS}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <BtnSave type="submit">Register</BtnSave>
      </FormRegister>
    </MainContainer>
  )
}

export default Form
