import * as enums from '../Utils/enums/task'

class Task {
  name: string
  priority: enums.Priority
  cellphone: number
  email: string
  description: string
  id: number

  constructor(
    name: string,
    priority: enums.Priority,
    cellphone: number,
    email: string,
    description: string,
    id: number
  ) {
    this.name = name
    this.priority = priority
    this.cellphone = cellphone
    this.email = email
    this.description = description
    this.id = id
  }
}

export default Task
