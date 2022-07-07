import { createSlice } from '@reduxjs/toolkit'

export type DayStateType = {
  form: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    dayId: string
  }
}

const initialState: DayStateType = {
  form: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    dayId: '',
  },
}

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    updateForm(state: DayStateType, action: { payload: DayStateType['form'] }) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: DayStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = daySlice.actions
export default daySlice.reducer
