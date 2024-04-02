import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../Utils/enums/task'

const tasks = [
  {
    name: 'Caio Bakerolov',
    priority: enums.Priority.FRIENDS,
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com',
    description: 'My father'
  },
  {
    name: 'Jose Francisco',
    priority: enums.Priority.WORK,
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com',
    description: 'Worked with me at Google'
  },
  {
    name: 'Aline Alcantara',
    priority: enums.Priority.EMERGENCY,
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com',
    description: 'My wife'
  },
  {
    name: 'Ravi Bakerolov',
    priority: enums.Priority.FAMILY,
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com',
    description: 'My son'
  },
  {
    name: 'Gael Bakerolov',
    priority: enums.Priority.FAVORITE,
    cellphone: +640123123123,
    email: 'caiobakerolov@icloud.com',
    description: 'My Son'
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
            name={t.name}
            priority={t.priority}
            cellphone={t.cellphone}
            email={t.email}
            description={t.description}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListTasks
