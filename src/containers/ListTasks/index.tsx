import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>2 Tasks marked as: &quot;category&ldquo; e &quot;Term&ldquo;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.name}>
            {' '}
            <Task
              name={t.name}
              priority={t.priority}
              cellphone={t.cellphone}
              email={t.email}
              description={t.description}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListTasks
