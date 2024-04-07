import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../Utils/enums/task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      name: 'Suely',
      priority: enums.Priority.FAMILY,
      cellphone: '11223556889',
      email: 'suely@gmail.com',
      description: 'My mother'
    },
    {
      id: 2,
      name: 'Jose',
      priority: enums.Priority.WORK,
      cellphone: '11223556889',
      email: 'Jose@gmail.com',
      description: 'My mother'
    },
    {
      id: 3,
      name: 'Luzia',
      priority: enums.Priority.FAVORITE,
      cellphone: '11223556889',
      email: 'Luzia@gmail.com',
      description: 'My mother'
    },
    {
      id: 4,
      name: 'Gilberto',
      priority: enums.Priority.FRIENDS,
      cellphone: '11223556889',
      email: 'Gilberto@gmail.com',
      description: 'My mother'
    },
    {
      id: 5,
      name: 'Frances',
      priority: enums.Priority.EMERGENCY,
      cellphone: '11223556889',
      email: 'Frances@gmail.com',
      description: 'My mother'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Task>) => {
      const nameExist = state.itens.find(
        (task) => task.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (nameExist) {
        alert('There is already a name like this')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remove, edit, register } = tasksSlice.actions

export default tasksSlice.reducer
