import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../Utils/enums/task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Suely',
      enums.Priority.FAMILY,
      620422176269,
      'suely@gmail.com',
      'My mother',
      1
    ),
    new Task(
      'francisco',
      enums.Priority.FRIENDS,
      620422176269,
      'francisco@gmail.com',
      'My friend',
      2
    ),
    new Task(
      'lima',
      enums.Priority.WORK,
      620422176269,
      'lima@gmail.com',
      'Work',
      3
    ),
    new Task(
      'arnaldo',
      enums.Priority.EMERGENCY,
      620422176269,
      'arnaldo@gmail.com',
      'My family',
      4
    ),
    new Task(
      'Lucio',
      enums.Priority.FAVORITE,
      620422176269,
      'lucio@gmail.com',
      'My family',
      4
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
