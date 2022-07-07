import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  form: {
    title: string
    description: string
    status: string
    option: Array<{ id: number; title: string; value: string }>
    dayId: string
  }
}

const initialState: ExerciseStateType = {
  form: {
    title: '',
    description: '',
    status: '',
    option: [],
    dayId: '',
  },
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    updateForm(
      state: ExerciseStateType,
      action: { payload: ExerciseStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    addOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option.push(action.payload)
    },
    deleteOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option = state.form.option.filter(
        (option) => option.id !== action.payload.id
      )
    },
    clearForm(state: ExerciseStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = exerciseSlice.actions
export default exerciseSlice.reducer
