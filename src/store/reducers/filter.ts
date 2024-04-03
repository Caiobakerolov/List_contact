import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../Utils/enums/task'

type FilterState = {
  term?: string
  criterion: 'priority' | 'all'
  value?: enums.Priority
}

const initialState: FilterState = {
  term: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions

export default filterSlice.reducer
