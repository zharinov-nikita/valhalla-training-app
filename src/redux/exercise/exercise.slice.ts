import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  form: {
    title: string
    description: string
    status: string
    option?: Array<{ title: string; value: string }>
    dayId: string
  }
}

const initialState: ExerciseStateType = {
  form: {
    title: '',
    description: '',
    status: '',
    option: [{ title: '', value: '' }],
    dayId: '',
  },
}

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    updateForm(
      state: ExerciseStateType,
      action: { payload: ExerciseStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: ExerciseStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = workoutSlice.actions
export default workoutSlice.reducer
