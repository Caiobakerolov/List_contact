import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    name: 'Caio Bakerolov',
    priority: 'friends',
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com'
  },
  {
    name: 'Jose Francisco',
    priority: 'work',
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com'
  },
  {
    name: 'Aline Alcantara',
    priority: 'emergency',
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com'
  },
  {
    name: 'Ravi Bakerolov',
    priority: 'family',
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com'
  },
  {
    name: 'Gael Bakerolov',
    priority: 'important',
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com'
  }
]

const ListTasks = () => (
  <Container>
    <p>2 Tasks marked as: &quot;category&ldquo; e &quot;Term&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.name}>
          {' '}
          <Task
            cellphone={t.cellphone}
            email={t.email}
            name={t.name}
            priority={t.priority}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListTasks
