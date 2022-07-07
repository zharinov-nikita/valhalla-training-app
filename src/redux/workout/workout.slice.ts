import { createSlice } from '@reduxjs/toolkit'

export type DayStateType = {
  form: {
    title: string
    description: string
    status: string
    dayId: string
  }
}

const initialState: DayStateType = {
  form: {
    title: '',
    description: '',
    status: '',
    dayId: '',
  },
}

export const workoutSlice = createSlice({
  name: 'workout',
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

export const { updateForm } = workoutSlice.actions
export default workoutSlice.reducer
