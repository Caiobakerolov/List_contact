import * as enums from '../Utils/enums/task'

class Task {
  name: string
  cellphone: string
  email: string
  description: string
  priority: enums.Priority
  id: number

  constructor(
    name: string,
    cellphone: string,
    email: string,
    description: string,
    priority: enums.Priority,
    id: number
  ) {
    this.name = name
    this.cellphone = cellphone
    this.email = email
    this.description = description
    this.priority = priority
    this.id = id
  }
}

export default Task
