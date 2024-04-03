import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    return itens.filter(
      (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 Tasks marked as: &quot;category&ldquo; e &quot;{term}&ldquo;</p>
      <ul>
        {filterTasks().map((t) => (
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
