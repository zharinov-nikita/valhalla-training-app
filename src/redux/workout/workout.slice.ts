import { createSlice } from '@reduxjs/toolkit'

export type WorkoutStateType = {
  form: {
    title: string
    description: string
    status: string
    dayId: string
  }
}

const initialState: WorkoutStateType = {
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
    updateForm(
      state: WorkoutStateType,
      action: { payload: WorkoutStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: WorkoutStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = workoutSlice.actions
export default workoutSlice.reducer
