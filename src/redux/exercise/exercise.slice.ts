import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  form: {
    title: string
    description: string
    status: string
    option: Array<{ id: number; title: string; value: string }>
  }
}

const initialState: ExerciseStateType = {
  form: {
    title: '',
    description: '',
    status: '',
    option: [],
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

    clearForm(state: ExerciseStateType) {
      state.form = initialState.form
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
    updateOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option = state.form.option.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload }
        }
        return item
      })
    },
  },
})

export const {
  updateForm,
  updateOptionForm,
  addOptionForm,
  deleteOptionForm,
  clearForm,
} = exerciseSlice.actions
export default exerciseSlice.reducer
