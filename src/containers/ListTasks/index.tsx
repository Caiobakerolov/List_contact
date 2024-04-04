import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container, Result } from './styles'
import { RootReducer } from '../../store'

const ListTasks = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tasksFiltered = itens

    if (term !== undefined) {
      tasksFiltered = tasksFiltered.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        tasksFiltered = tasksFiltered.filter((item) => item.priority === value)
      }

      return tasksFiltered
    } else {
      return itens
    }
  }

  const showResultFilter = (amount: number) => {
    let message = ''
    const complementing =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'all') {
      message = `${amount} task(s) found as: all ${complementing}`
    } else {
      message = `${amount} task(s) found as: "${`${criterion} = ${value}`}"${complementing}`
    }

    return message
  }

  const tasks = filterTasks()
  const message = showResultFilter(tasks.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {tasks.map((t) => (
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
