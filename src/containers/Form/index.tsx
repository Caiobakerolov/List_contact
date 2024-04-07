import { BtnSave, MainContainer, Title } from '../../styles'
import { Field } from '../../styles'
import { FormRegister, Options } from './styles'

const Form = () => (
  <MainContainer>
    <Title>New Task</Title>
    <FormRegister>
      <Field type="text" placeholder="Name" />
      <Field type="tel" placeholder="Phone" />
      <Field type="email" placeholder="Email" />
      <Field as="textarea" placeholder="Task description " />
      <Options>
        <p>Priority</p>
        <input name="priority" type="radio" id="friends" />{' '}
        <label htmlFor="friends">Friends</label>
        <input name="priority" type="radio" id="family" />{' '}
        <label htmlFor="family">Family</label>
        <input name="priority" type="radio" id="work" />{' '}
        <label htmlFor="work">Work</label>
        <input name="priority" type="radio" id="favorite" />{' '}
        <label htmlFor="favorite">Favorite</label>
        <input name="priority" type="radio" id="emergency" />{' '}
        <label htmlFor="emergency">Emergency</label>
      </Options>
      <BtnSave type="submit">Register</BtnSave>
    </FormRegister>
  </MainContainer>
)

export default Form
